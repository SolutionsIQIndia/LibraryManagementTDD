var express = require('express'),
	app = express(),
	port = 3000;

app.use(express.static(__dirname + '/client'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(port, function(){
	console.log("Listening On Port 3000..!")
});