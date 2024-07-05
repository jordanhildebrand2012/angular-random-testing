import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.add(5, 5);
    expect(result).toBe(10);
  });

  it("should subtract two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.subtract(5, 5);
    expect(result).toBe(0, "should subtract two numbers");
  });
});
