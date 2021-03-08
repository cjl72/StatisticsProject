const math = require('mathjs');
const Mean = require('../DescriptiveStatistics/Mean');
const Square = require('../operations/Square');

function Variance (data) {
    let mean = Mean(data);
    let total = 0;
    let l = data.length;
    data.forEach(function(x){
        total += Square(x - mean);
    })
    return total/(l-1);
}
module.exports = Variance;