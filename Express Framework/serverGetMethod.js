var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/getMethodIndex.html', function(req,res){
	res.sendFile(__dirname + "/" + 'getMethodIndex.html');
});

app.get('/process_get',function(req,res){
	//Prepare output for JSON format
	response = {
		firstName:req.query.firstName,
		lastName:req.query.lastName
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example of app listening at http://%s:%s", host,port);
});