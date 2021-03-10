function Mean(data) {
    const length = data.length;
    let summation = 0;
    data.forEach(function(x) {
        summation = Sum(summation, x);
    });
    return Quotient(summation, length);
}
module.exports = Mean;