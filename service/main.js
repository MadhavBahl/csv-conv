/**
 * Step 1: make a converter
 */

let converter = (objArr) => {
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

    return csv;
}

const sampleData = [
    { name: 'John', profession: 'Student', age: 21 },
    { name: 'Kepler', profession: 'Singer', age: 31 },
    { name: 'Amanada', profession: 'Dancer', age: 25 },
    { name: 'Nicholas', profession: 'Actor', age: 40 }
];

console.log (converter (sampleData));