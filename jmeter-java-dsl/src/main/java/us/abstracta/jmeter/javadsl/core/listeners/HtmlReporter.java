package us.abstracta.jmeter.javadsl.core.listeners;

import java.io.File;
import java.io.IOException;
import java.nio.file.DirectoryNotEmptyException;
import java.nio.file.DirectoryStream;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.util.concurrent.atomic.AtomicInteger;
import org.apache.jmeter.JMeter;
import org.apache.jmeter.report.config.ConfigurationException;
import org.apache.jmeter.report.config.ReportGeneratorConfiguration;
import org.apache.jmeter.report.dashboard.GenerationException;
import org.apache.jmeter.report.dashboard.ReportGenerator;
import org.apache.jmeter.reporters.ResultCollector;
import org.apache.jmeter.reporters.Summariser;
import org.apache.jmeter.samplers.SampleEvent;
import org.apache.jmeter.testelement.TestElement;
import org.apache.jmeter.util.JMeterUtils;
import org.apache.jmeter.visualizers.SimpleDataWriter;

/**
 * Generates a nice HTML report at the end of test plan execution.
 *
 * @since 0.6
 */
public class HtmlReporter extends BaseListener {

  private final File reportDirectory;
  private long apdexSatisfied = 0;
  private long apdexTolerated = 0;

  public HtmlReporter(String reportPath) throws IOException {
    super("Simple Data Writer", SimpleDataWriter.class);
    reportDirectory = new File(reportPath);
    if (reportDirectory.isFile()) {
      throw new FileAlreadyExistsException(reportPath);
    }
    if (reportDirectory.isDirectory() && !isEmptyDirectory(reportDirectory)) {
      throw new DirectoryNotEmptyException(reportPath);
    }
  }

  private boolean isEmptyDirectory(File reportDirectory) throws IOException {
    try (DirectoryStream<Path> dirContentsStream = Files.newDirectoryStream(
        reportDirectory.toPath())) {
      return !dirContentsStream.iterator().hasNext();
    }
  }

  @Override
  public TestElement buildTestElement() {
    if (!reportDirectory.exists()) {
      reportDirectory.mkdirs();
    }
    File resultsFile = new File(reportDirectory, "report.jtl");
    HtmlReportSummariser reporter = new HtmlReportSummariser(resultsFile);
    ResultCollector logger = new AutoFlushingResultCollector(reporter);
    logger.setFilename(resultsFile.getPath());

    if (apdexSatisfied != 0 && apdexTolerated != 0) {
      JMeterUtils.setProperty(
          ReportGeneratorConfiguration.REPORT_GENERATOR_KEY_PREFIX + ".apdex_satisfied_threshold",
          "" + (this.apdexSatisfied)
      );
      JMeterUtils.setProperty(
          ReportGeneratorConfiguration.REPORT_GENERATOR_KEY_PREFIX + ".apdex_tolerated_threshold",
          "" + (this.apdexTolerated)
      );
    }
    return logger;
  }

  private static class HtmlReportSummariser extends Summariser {

    private final File resultsFile;
    private final AtomicInteger hostsCount = new AtomicInteger(0);

    private HtmlReportSummariser(File resultsFile) {
      this.resultsFile = resultsFile;
    }

    @Override
    public void testStarted(String host) {
      super.testStarted(host);
      hostsCount.incrementAndGet();
    }

    @Override
    public void sampleOccurred(SampleEvent e) {
      // same as previous method
    }

    @Override
    public void testEnded(String host) {
      // verify that all remote hosts have ended before generating report
      if (hostsCount.decrementAndGet() <= 0) {
        try {
          JMeterUtils.setProperty(JMeter.JMETER_REPORT_OUTPUT_DIR_PROPERTY,
              new File(resultsFile.getParent()).getAbsolutePath());
          new ReportGenerator(resultsFile.getPath(), null).generate();
        } catch (GenerationException | ConfigurationException e) {
          throw new RuntimeException(e);
        }
      }
    }

  }

  /*
   this class is required to assure (even in remote execution) that file is written before
   generating report
   */
  public static class AutoFlushingResultCollector extends ResultCollector {

    public AutoFlushingResultCollector() {
    }

    public AutoFlushingResultCollector(Summariser summer) {
      super(summer);
    }

    @Override
    public void testEnded(String host) {
      flushFile();
      super.testEnded(host);
    }

  }

  /**
   * Allows to configure APDEX for all requests in test.
   *
   * @param satisfied - "satisfied" threshold
   * @param tolerated - "tolerated" threshold
   * @return HtmlReporter
   *
   * @since 0.57
   */
  public HtmlReporter apdex(Duration satisfied, Duration tolerated) {

    this.apdexSatisfied = satisfied.getSeconds() * 1000;
    this.apdexTolerated = tolerated.getSeconds() * 1000;

    return this;
  }
}
