package us.abstracta.jmeter.javadsl.core.controllers;

import org.apache.jmeter.protocol.http.config.gui.HttpDefaultsGui;
import org.apache.jmeter.testelement.TestElement;
import org.apache.jorphan.collections.HashTree;
import us.abstracta.jmeter.javadsl.core.BuildTreeContext;
import us.abstracta.jmeter.javadsl.core.testelements.BaseTestElement;
import us.abstracta.jmeter.javadsl.core.testelements.TestElementContainer;
import us.abstracta.jmeter.javadsl.core.threadgroups.BaseThreadGroup;

import java.util.ArrayList;

public class DslRandomSwitchController extends TestElementContainer<BaseTestElement> implements BaseThreadGroup.ThreadGroupChild {
  private final RandomSwitchController rsc;

  protected DslRandomSwitchController() {
    super("Random Switch Controller", HttpDefaultsGui.class, new ArrayList<>());
    this.rsc = new RandomSwitchController();
  }

  public static DslRandomSwitchController randomSwitchController() {
    return new DslRandomSwitchController();
  }

  public DslRandomSwitchController add(Double probability, BaseTestElement element) {
    children.add(element);
    HashTree ret = new HashTree();
    BuildTreeContext ctx = new BuildTreeContext();
    ctx.buildChild(element, ret);
    rsc.add(probability, ((TestElement) (ret.getArray()[0])));
    return this;
  }

  @Override
  protected TestElement buildTestElement() {
    return this.rsc;
  }
}
