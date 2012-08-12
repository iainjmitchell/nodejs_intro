require('http')
    .createServer(function (request, response) {
        var data = '';
        request.on('data', function (chunk) {
            data += chunk;
        });
        request.on('end', function () {
            var result = fizzBuzz(data);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('TEAM1: ' +  result);
        });
	})
	.listen(process.env.PORT);
    
    
function fizzBuzz(number){
    return number;
}