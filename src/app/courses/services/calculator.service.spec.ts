import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const logger = jasmine.createSpyObj("LoggerService", ["log"]);
    const calculator = new CalculatorService(logger);
    const result = calculator.add(5, 5);
    expect(result).toBe(10);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    const logger = jasmine.createSpyObj("LoggerService", ["log"]);
    const calculator = new CalculatorService(logger);
    const result = calculator.subtract(5, 5);
    expect(result).toBe(0, "should subtract two numbers");
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
