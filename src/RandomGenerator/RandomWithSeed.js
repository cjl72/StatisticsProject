class RandomWithSeed {
    constructor(a,b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getRandom() {
        return 'a: ${this.a}';
    }
}

module.exports = RandomWithSeed
