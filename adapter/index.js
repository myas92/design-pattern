const Calculator = require("./refactor-calculator");
const CalculatorAdapter = require("./calculator-adapter");
// const CalculatorOld = require("./calculator");

//Adapter
const calcAdapter = new CalculatorAdapter();
const sumAdapter = calcAdapter.operation(2, 2, "multiplication");
console.log(sumAdapter); //output 4

//new Calculator
const calculator = new Calculator();
const sum = calculator.mult(2, 2);
console.log(sum); //output 4

// old Calculator
// const calculatorOld = new CalculatorOld();
// const multi = calculatorOld.operation(2, 2, 'multiplication');
// console.log(multi ); //output 2

