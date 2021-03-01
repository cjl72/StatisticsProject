class Read{
    static getFileRecords(filename, Model) {
        const parse = require('csv-parse/lib/sync');
        const fs = require('fs');
        const file = require('../fileOps/File');
        let abs = file.getAbsolutePath(filename);
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };
     let fileCont = fs.readFileSync(abs);
     const records = parse(fileCont, options)
     let listRecords = Array();
     records.forEach(function (x) {
        listRecords.push(Model.create(x));
     })

     return listRecords;
    }
}
module.exports = Read;