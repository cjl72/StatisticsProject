const Mean = require('Mean');
const StandardDeviation = require('StandardDeviation');
const Quotient = require('../operations/Quotient');

function Zscore(index, data) {
    let x = data.get(index);
    let m = Mean(data);
    let sd = StandardDeviation(data);
    return Quotient((x-m), sd);
}
module.exports = Zscore;