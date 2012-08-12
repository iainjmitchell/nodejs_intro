require('http')
	.createServer(function (request, response) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello World');
	})
	.listen(process.env.PORT);

console.log('Server running');