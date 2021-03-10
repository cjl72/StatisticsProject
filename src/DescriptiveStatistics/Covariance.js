const cov = require('compute-covariance');

function Covariance(data, data2) {
    return cov(data, data2);
}
module.exports = Covariance;