const randomListInt = require('../src/RandomGenerator/RandomList');

test('Test randomListInt Function', () => {
    expect(randomListInt(1,10,5,"hello")).toStrictEqual([2,1,1,7,7]);
});