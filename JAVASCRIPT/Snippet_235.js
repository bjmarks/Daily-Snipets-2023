// node required ::::: node JAVASCRIPT/Snippet_235.js
const fs = require('fs');
fs.readFile('./Assets/test.json', 'utf-8', (err, jsonString) => {
    err ? console.log(err) : console.log(jsonString);
})
