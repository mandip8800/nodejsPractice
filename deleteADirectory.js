var fs = require("fs");

console.log("Going to delete directory /practiceCreateDirectory");
fs.rmdir("../NodeJsPractice/practiceCreateDirectory",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /practiceCreateDirectory");
   
   fs.readdir("../NodeJsPractice",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});