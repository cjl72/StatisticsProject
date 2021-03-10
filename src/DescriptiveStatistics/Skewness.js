const skewness = require('compute-skewness');

function Skewness(data) {
    return skewness(data);
}
module.exports = Skewness;