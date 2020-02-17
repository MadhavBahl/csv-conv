/**
 * Step 2: Import data from another file and write to a csv file
 */

const fs = require('fs');
// Import the data
const myData = require('./data.js');
console.log ('MY DATA: ', myData);

let convertAndExport = (objArr) => {
    let csv = '';

    // Add the fields to CSV
    for (key in objArr[0]) {
        if (csv != '')  csv += ',';
        csv += key;
    }
    csv += '\r\n';

    // Add the values
    for (currentObj of objArr) {
        let currentLine = '';
        for (key in currentObj) {
            if (currentLine != '') currentLine += ',';
            currentLine += currentObj[key];
        }
        csv += currentLine + '\r\n';
    }

    fs.writeFile ('csvData.csv', csv, (err) => {
        if (err) throw err;
    })
}

convertAndExport (myData);
