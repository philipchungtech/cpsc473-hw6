var http = require('http');

var server = http.createServer(function(req, res) {
	console.log('Responding to a request');
	res.end('<h1>Hello, world!</h1>');
});
server.listen(3000);