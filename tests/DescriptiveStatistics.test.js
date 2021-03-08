const math = require('mathjs');
const Mean = require('../src/DescriptiveStatistics/Mean');


test('Test Mean Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Mean(testData)).toBe(math.mean(testData));
});
