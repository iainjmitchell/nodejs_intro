require('net')
	.createServer(function (socket) {
		socket.write('helloWorld')
	})
	.listen(1330, '127.0.0.1');
