const Sum = require('../operations/Sum');
const Quotient = require('../operations/Quotient');

function Median(data) {
    data.sort(function(a,b) {
        return a - b;
    });
    let half = Math.floor(data.length/2);

    if(data.length % 2) {
        return data[half];
    }
    else
        return (Quotient(Sum(data[half-1], data[half]), 2.0));
}
module.exports = Median;