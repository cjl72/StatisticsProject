const Calculation = require('../src/models/Calculation');
const Sum = require('../src/operations/Sum');
const Difference = require('../src/operations/Difference');
const Product = require('../src/operations/Product');
const Quotient = require('../src/operations/Quotient');
const Square = require('../src/operations/Square');
const squareRoot = require ('../src/operations/squareRoot');

class Calculator {
    static Calculations = []

    static Sum(a,b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a,b) {
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(a,b) {
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b) {
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(a,b) {
        let calculation = new Calculation(a,b,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static squareRoot(a,b) {
        let calculation = new Calculation(a,b,squareRoot);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}
module.exports = Calculator;