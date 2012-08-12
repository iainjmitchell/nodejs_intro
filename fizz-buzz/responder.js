require('http')
    .createServer(function (request, response) {
		
        console.log(request);
        var number = request.data;
        var result = fizzBuzz(number);
        response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end(result);
	})
	.listen(process.env.PORT);
    
    
function fizzBuzz(number){
    console.log(number);
    return number;
}