const Mean = require('../DescriptiveStatistics/Mean');
const StandardDeviation = require('../DescriptiveStatistics/StandardDeviation');
const Quotient = require('../operations/Quotient');

function Zscore(index, data) {
    let m = Mean(data);
    let sd = StandardDeviation(data);
    return Quotient((index-m), sd);
}
module.exports = Zscore;