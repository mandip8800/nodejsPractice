var fs = require("fs");
var data = '';

var readStream = fs.createReadStream('input.txt');
readStream.on('data',function(streamValues){
	data +=streamValues;
});

readStream.on('end',function(){
	console.log(data);
});

readStream.on('error',function(err){
	console.log(err.stack);
})
console.log("Program Ended.");