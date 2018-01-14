var fs = require('fs');
console.log("Going to write into existing file.");
fs.writeFile('input2.txt', 'Writing using file system.',function(err){
	if(err){
		return console.error(err);
	}
	console.log("Data written successfully.");
	console.log("Let's read newly written data.");
	fs.readFile('input2.txt',function(err,data){
		if(err){
			return console.error(err);
		}
		console.log("Asynchronous read:" + data.toString());
	});
});
console.log("First Part Completed.");
//Two ways to read and write into a file, using file system and using stream.

var data = 'Practice writing to stream and this is the data.';

var writeStream = fs.createWriteStream('output3.txt');
writeStream.write(data,'UTF8');

writeStream.end();
writeStream.on('finish',function(){
	console.log("Writing completed.");
});

writeStream.on('error',function(){
	console.log(err.stack);
});

console.log("Program ended writing.");
console.log("Second Part Completed.");

var data = '';
var readerStream = fs.createReadStream('output3.txt');
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
console.log("Third part completed.");
