const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(10,5);
    expect(result).toBe(15);
});
test('Calculator subtracting two numbers', () => {
    let result = Calculator.Difference(10,5);
    expect(result).toBe(5);
});
test('Calculator multiplying two numbers', () => {
    let result = Calculator.Product(10,5);
    expect(result).toBe(50);
});
test('Calculator dividing two numbers', () => {
    let result = Calculator.Quotient(10,5);
    expect(result).toBe(2);
});
test('Calculator squaring a number', () => {
    let result = Calculator.Square(10,null);
    expect(result).toBe(100);
});
test('Calculator finding square root of a number', () => {
    let result = Calculator.squareRoot(25,null);
    expect(result).toBe(5);
});
test('Calculator adding to calculations', () => {
    let result = Calculator.Square(5,null);
    let calculations = Calculator.Calculations
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});