const fs = require("fs");
let path = './Assets/test.json';
let buffer = new Buffer.from('{"TEST": "TEXT"}\n');
    fs.open(path, 'a', function(err, fd) {
        if(err) {
            console.log('Cant open file');
        }
        else {
            fs.write(fd, buffer, 0, buffer.length, null, function(err,writtenbytes) {
                err ? console.log('Cant write to file'):console.log(`${writtenbytes} characters added to file`);
            })
        }
    })