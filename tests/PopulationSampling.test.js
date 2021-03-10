const MarginError = require('../src/PopSamplingFunctions/MarginError');
const randomListInt = require('../src/RandomGenerator/RandomListInt');

test('Test MarginError Function', () => {
    let arr = randomListInt(1,10,5,"hello world")
    console.log(arr);
    expect(MarginError(5,arr)).toBe(0.17888543819998332);
});