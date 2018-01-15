var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static('public'));
app.get('/postMethodIndex.html', function(req,res){
	res.sendFile(__dirname + "/" + 'postMethodIndex.html');
});

app.post('/process_post',urlencodedParser,function(req,res){
	//Prepare output for JSON format
	response = {
		firstName:req.body.firstName,
		lastName:req.body.lastName
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example of app listening at http://%s:%s", host,port);
});