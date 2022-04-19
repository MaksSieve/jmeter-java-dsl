package us.abstracta.jmeter.javadsl.core.controllers;

import org.apache.jmeter.control.Controller;
import org.apache.jmeter.control.GenericController;
import org.apache.jmeter.control.TransactionController;
import org.apache.jmeter.samplers.Sampler;
import org.apache.jmeter.testelement.TestElement;
import org.apache.jmeter.testelement.property.CollectionProperty;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;


public class RandomSwitchController extends GenericController implements Serializable {

  private final String BOUNDS = "BOUNDS";
  private final String WEIGHTS = "WEIGHTS";
  private boolean chosen = false;
  private double coin = 0d;
  private boolean skip = false;


  public RandomSwitchController() {

    this.setProperty(new CollectionProperty(BOUNDS, Arrays.stream(new Double[]{100.0}).collect(Collectors.toList())));
    this.setProperty(new CollectionProperty(WEIGHTS, Arrays.stream(new Double[]{100.0}).collect(Collectors.toList())));
  }

  private List<Double> propToList(CollectionProperty prop) {

    List<Double> res = new ArrayList<>();

    for (int i = 0; i < prop.size(); i++) {
      res.add(prop.get(i).getDoubleValue());
    }

    return res;
  }

  public void add(Double probability, TestElement element) throws IllegalArgumentException {

    List<Double> weights = propToList((CollectionProperty) this.getProperty(WEIGHTS));
    List<Double> bounds = propToList((CollectionProperty) this.getProperty(BOUNDS));

    if (probability > 100) {
      throw new IllegalArgumentException("Probabilities cannot be nore than 100");
    }
    if (weights.stream().reduce(0d, Double::sum) - weights.get(0) + probability > 100) {
      throw new IllegalArgumentException("Sum of probabilities cannot exceed 100");
    }
    for (int i = 0; i <= Math.max(bounds.size() - 1, 0); i++) {
      bounds.set(i, bounds.get(i) - probability);
    }
    weights.add(probability);
    weights.set(0, weights.get(0) - probability);
    bounds.add(bounds.get(bounds.size() - 1) + probability);

    ((CollectionProperty) this.getProperty(WEIGHTS)).setCollection(weights);
    ((CollectionProperty) this.getProperty(BOUNDS)).setCollection(bounds);

    super.addTestElement(element);
  }

  private Double tossACoin() {
    return ThreadLocalRandom.current().nextDouble() * 100;
  }

  @Override
  public Sampler next() {
    Sampler result = super.next();

    if (this.chosen && !this.skip) {
      if (result != null &&
          !(super.getSubControllers().get(this.current - 1) instanceof TransactionController)) {
        chosen = false;
        return result;
      } else {
        this.reset();
        for (TestElement element : super.getSubControllers()) {
          if (element instanceof Controller) {
            ((Controller) element).triggerEndOfLoop();
          }
        }
        return null;
      }
    } else {
      this.choose();
      return this.next();
    }
  }

  public List<TestElement> getSubControllers() {
    return super.getSubControllers();
  }

  private void choose() {
    coin = tossACoin();
    List<Double> bounds = propToList((CollectionProperty) this.getProperty(BOUNDS));
    double leftBound = 0d;
    for (Double rightBound : bounds) {
      int idx = bounds.indexOf(rightBound);
      if (coin > leftBound && coin <= rightBound) {
        this.skip = current == 0;
        this.current = (idx == 0) ? 0 : idx - 1;
        this.chosen = true;
        break;
      }
      leftBound = rightBound;
    }
  }

  public void reset() {
    this.chosen = false;
    for (TestElement controller : this.getSubControllers()) {
      if (controller instanceof RandomSwitchController) {
        ((RandomSwitchController) controller).reset();
      }
    }

  }
}
