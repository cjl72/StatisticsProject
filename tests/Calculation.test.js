const Calculation = require('../src/models/Calculation');
const Sum = require('../src/operations/Sum');
const Difference = require('../src/operations/Difference');
const Product = require('../src/operations/Product');
const Quotient = require('../src/operations/Quotient');
const Square = require('../src/operations/Square');
const squareRoot = require ('../src/operations/squareRoot');

test('Test Calculation Instantiation', () => {
    let calculation = new Calculation(1,2, Sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(Sum);
});
test('Test Get results for Sum function', () => {
    let calculation = new Calculation(10,5, Sum);
    expect(calculation.GetResults()).toBe(15);
});
test('Test Get results for Difference function', () => {
    let calculation = new Calculation(10,5, Difference);
    expect(calculation.GetResults()).toBe(5);
});
test('Test Get results for Product function', () => {
    let calculation = new Calculation(10,5, Product);
    expect(calculation.GetResults()).toBe(50);
});
test('Test Get results for Quotient function', () => {
    let calculation = new Calculation(10,5, Quotient);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Square function', () => {
    let calculation = new Calculation(10, null, Square);
    expect(calculation.GetResults()).toBe(100);
});
test('Test Get results for squareRoot function', () => {
    let calculation = new Calculation(25, null, squareRoot);
    expect(calculation.GetResults()).toBe(5);
});