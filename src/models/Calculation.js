class Calculation{
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    clone() {
        return Object.create(this);
    }

    transform(calc, op) {
        calc.isTransformed = true;
        calc.op = op;
        return calc;
    }

    GetResults() {
        return this.op(this.a, this.b)
    }
}
module.exports = Calculation;