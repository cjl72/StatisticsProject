const math = require('mathjs');
const RandomList = require('../src/RandomGenerator/RandomList');
// const RandomNoSeed = require('../src/RandomGenerator/RandomNoSeed');
// const RandomWithSeed = require('../src/RandomGenerator/RandomNoSeed');
// const Seed = require('../src/RandomGenerator/Seed');
// const SelectRandomItem = require('../src/RandomGenerator/SelectRandomItem');
// const SelectWithoutSeed = require('../src/RandomGenerator/SelectWithoutSeed');

test('Test Random List Function',() => {
    const testData = [1,2,3];
    expect(RandomList(testData)).toBe(math.floor(Math.random() * Math.floor(max)));
});

test('Test Random No Seed', () => {
    const testData = []
})
