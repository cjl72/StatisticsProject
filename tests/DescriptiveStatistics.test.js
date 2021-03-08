const math = require('mathjs');
const Mean = require('../src/DescriptiveStatistics/Mean');
const Median = require('../src/DescriptiveStatistics/Median');
const Mode = require('../src/DescriptiveStatistics/Mode');
const Variance = require('../src/DescriptiveStatistics/Variance');


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
