var fs = require("fs");
var data = 'Practice writing to stream and this is the data';

var writeStream = fs.createWriteStream('output1.txt');
writeStream.write(data,'UTF8');

writeStream.end();
writeStream.on('finish',function(){
	console.log("Writing completed.");
});

writeStream.on('error',function(){
	console.log(err.stack);
});

console.log("Program ended writing.");