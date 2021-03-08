const math = require('mathjs');
const Mean = require('../DescriptiveStatistics/Mean');
const Square = require('../operations/Square');

function Variance (data) {
    let mean = Mean(data);
    return Mean(data.map(function(num) {
        return Square(num - mean);
    }));
}
module.exports = Variance;