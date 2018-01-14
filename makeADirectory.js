var fs = require("fs");
console.log("Going to create a directory NodeJsPractice/practiceCreateDirectory");
fs.mkdir('../NodeJsPractice/practiceCreateDirectory',function(err){
if(err){
	return console.error(err);
}
console.log("Directory created Successfully.");
});