package us.abstracta.jmeter.javadsl.core.listeners;

import org.apache.jmeter.reporters.ResultSaver;
import org.apache.jmeter.reporters.gui.ResultSaverGui;
import org.apache.jmeter.testelement.TestElement;

/**
 * Generates one file for each response of a sample/request.
 *
 * This element is dependant of the scope: this means that if you add it at test plan level it will
 * generate files for all samplers in test plan, if added at thread group level then it will
 * generate files for samplers only in the thread group, and if you add it at sampler level it will
 * generate files only for the associated sampler.
 *
 * By default, it will generate one file for each response using the given (which might include the
 * directory location) prefix to create the files and adding an incremental number to each response
 * and an extension according to the response mime type.
 *
 * @since 0.13
 */
public class ResponseFileSaver extends BaseListener {

  private final String fileNamePrefix;

  public ResponseFileSaver(String fileNamePrefix) {
    super("Save Responses to a file", ResultSaverGui.class);
    this.fileNamePrefix = fileNamePrefix;
  }

  @Override
  public TestElement buildTestElement() {
    ResultSaver ret = new ResultSaver();
    ret.setFilename(fileNamePrefix);
    return ret;
  }

}
