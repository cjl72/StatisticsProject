const math = require('mathjs');
const Mean = require('../src/DescriptiveStatistics/Mean');
const Median = require('../src/DescriptiveStatistics/Median');


test('Test Mean Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Mean(testData)).toBe(math.mean(testData));
});
test('Test Median Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Median(testData)).toBe(3.5);
});