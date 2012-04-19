require('http')
	.createServer(function (request, response) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello World');
	})
	.listen(1337, '127.0.0.1');

console.log('Server running');