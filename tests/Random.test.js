const randomListInt = require('../src/RandomGenerator/RandomList');

test('Test randomListInt Function', () => {
    expect(randomListInt(1,10,5,"hello world")).toStrictEqual([5,2,1,8,7]);
});