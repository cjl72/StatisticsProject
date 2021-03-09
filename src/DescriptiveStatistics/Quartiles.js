const math = require('mathjs');

function Quartiles(data) {
    let a = math.quantileSeq(data, 0.25, this.sorted);
    let b = math.quantileSeq(data, 0.5, this.sorted);
    let c = math.quantileSeq(data, 0.75, this.sorted);
    return [a,b,c];
}
module.exports = Quartiles;