function Quotient (a,b) {
    if (b === 0) {
        throw 'Error: Cannot divide by zero'
    }
    return a / b;
}
module.exports = Quotient;