const Mean = require('../DescriptiveStatistics/Mean');

function MeanDeviation(data) {
    let m = Mean(data);
    let total = 0;
    let l = data.length;
    data.forEach(function(x){
       total = total + math.abs(x-m)
    });
    return (total/l);
}
module.exports = MeanDeviation;