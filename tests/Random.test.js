const randomListInt = require('../src/RandomGenerator/RandomListInt');
const randomListDec = require('../src/RandomGenerator/RandomListDec');
const Seed = require('../src/RandomGenerator/Seed');

test('Test randomListInt Function', () => {
    expect(randomListInt(1,10,5,"hello world")).toStrictEqual([5,2,1,8,7]);
});
test('Test randomListDec Function', () => {
    expect(randomListDec(1,10,5,"hello world")).toStrictEqual([14.866952746323387,
        11.519860609856169,
        10.22052494676454,
        17.068305836405575,
        16.589502464281402
    ]);
});
test('Test Seed Function To Set Seed And Choose That Number From List', () => {
    let arr = randomListInt(1,10,50,"hello world");
    expect(Seed(arr,5)).toBe(5);
});
