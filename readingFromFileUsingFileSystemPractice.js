var fs = require('fs');
console.log("Going to read from existing file.");

	fs.readFile('input2.txt',function(err,data){
		if(err){
			return console.error(err);
		}
		console.log("Asynchronous read:" + data.toString());
	});

console.log("First Part Completed.");


var data = '';
var readerStream = fs.createReadStream('input2.txt');
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

console.log("Second part completed.");