import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
  let loggerSpy: any;
  let calculator: CalculatorService;
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
    calculator = new CalculatorService(loggerSpy);
  });
  it("should add two numbers", () => {
    const result = calculator.add(5, 5);
    expect(result).toBe(10);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    const result = calculator.subtract(5, 5);
    expect(result).toBe(0, "should subtract two numbers");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
