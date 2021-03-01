class Calculation{
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    clone(calc) {
        return Object.create(calc);
    }
    GetResults() {
        return this.op(this.a, this.b)
    }
}
module.exports = Calculation;