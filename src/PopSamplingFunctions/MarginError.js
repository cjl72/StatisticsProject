const Zscore = require('../DescriptiveStatistics/Zscore');
const StandardDeviation = require('../DescriptiveStatistics/StandardDeviation');
const squareRoot = require('../operations/squareRoot');

function MarginError(num, data) {
    let z = Zscore(num, data);
    let sd = StandardDeviation(data);
    return (z * (sd/(squareRoot(data.length))));
}
module.exports = MarginError;