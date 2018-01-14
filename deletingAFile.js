var fs = require("fs");
console.log("Going to delete existing file.");
fs.unlink('inputdelete.txt',function(err){
if(err){
	return console.error(err);
}
console.log("File deleted successfully.");
});