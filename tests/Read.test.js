const City = require('../src/models/City');
const CSVreader = require('../src/CSV/Read');
const expect = require('expect');
test('Read CSV File and count records', () => {
    let filename = 'data/worldcities.csv';
    let records = CSVreader.getFileRecords(filename, City);
    expect(records.length).toBe(6);
});
test('Checking model type', () => {
    let filename = 'data/worldcities.csv';
    let records = CSVreader.getFileRecords(filename, City);
    expect(records[0]).toBeInstanceOf(City);
})