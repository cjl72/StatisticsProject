const math = require('mathjs');
const Mean = require('../src/DescriptiveStatistics/Mean');
const Median = require('../src/DescriptiveStatistics/Median');
const Mode = require('../src/DescriptiveStatistics/Mode');
const Variance = require('../src/DescriptiveStatistics/Variance');
const StandardDeviation = require('../src/DescriptiveStatistics/StandardDeviation');
const Quartiles = require('../src/DescriptiveStatistics/Quartiles');
const Skewness = require('../src/DescriptiveStatistics/Skewness');
const skewness = require('compute-skewness');


test('Test Mean Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Mean(testData)).toBe(math.mean(testData));
});
test('Test Median Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Median(testData)).toBe(3.5);
});
test('Test Mode Function', () => {
   const testData = [1,1,2,3,4,5,6];
   expect(Mode(testData)).toStrictEqual([1]);
});
test('Test Variance Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Variance(testData)).toBe(math.variance(testData));
});
test('Test StandardDeviation Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(StandardDeviation(testData)).toBe(math.std(testData));
});
test('Test Quartiles Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Quartiles(testData)).toStrictEqual([math.quantileSeq(testData, 0.25, this.sorted),
        math.quantileSeq(testData, 0.5, this.sorted),
        math.quantileSeq(testData, 0.75, this.sorted)]);
});
test('Test Skewness Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Skewness(testData)).toBe(skewness(testData));
});

