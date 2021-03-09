const Sum = require('../operations/Sum');
const Quotient = require('../operations/Quotient');

function Mean(data) {
    const length = data.length;
    let total = 0;
    data.forEach(function(x) {
        total = Sum(total, x);
    });
    return Quotient(total, length);
}
module.exports = Mean;