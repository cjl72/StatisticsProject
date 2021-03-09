const squareRoot = require('../operations/squareRoot');
const Variance = require('../DescriptiveStatistics/Variance');

function StandardDeviation (data) {
    return squareRoot(Variance(data));
}
module.exports = StandardDeviation;