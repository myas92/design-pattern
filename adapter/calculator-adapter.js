const Calculator = require("./refactor-calculator")

class CalculatorAdapter {
  constructor() {
    this.calculator = new Calculator();
  }
  operation(num1, num2, operation) {
    switch (operation) {
      case "add":
        return this.calculator.add(num1, num2);
      case "multiplication":
        return this.calculator.mult(num1, num2);
      case "division":
        return this.calculator.div(num1, num2);
      default:
        return NaN;
    }
  }
}

module.exports = CalculatorAdapter;