const City = require('../src/models/City')
test('Create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Factory method', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});