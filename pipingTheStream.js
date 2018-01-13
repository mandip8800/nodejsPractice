var fs = require("fs");

var readStream = fs.createReadStream('input.txt');

var writeStream = fs.createWriteStream('output2.txt');
readStream.pipe(writeStream);

console.log("Program ended piping.");