class Calculator {
  operation(num1, num2, operation) {
    switch (operation) {
      case 'multiplication':
        return num1 * num2;
      case 'division':
        return num1 / num2;
      default:
        return NaN;
    }
  }
}

module.exports = Calculator;