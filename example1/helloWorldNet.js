require('net')
	.createServer(function (socket) {
		socket.write('helloWorld')
	})
	.listen(process.env.PORT, process.env.IP);
    
console.log('listening at ' + process.env.IP + ' on port ' + process.env.PORT);
