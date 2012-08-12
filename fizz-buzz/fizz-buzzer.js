var http = require('http'),
    teamOptions = [
      {host: '127.0.0.1', port: '8001', method: 'POST'},
      {host: 'nodejs_intro.iainjmitchell.c9.io', method: 'POST'}
    ];

fizzBuzzer(0, 1);

function fizzBuzzer(teamNumber, number){
  var callback = function(response) {
    var result = '';
    response.on('data', function (chunk) {
      result += chunk;
    });
    response.on('end', function () {
      console.log(number + " = " + result);
      var nextTeamNumber = getNextTeamNumber(teamNumber);
      fizzBuzzer(nextTeamNumber, number+1);
    });
  };

  var request = http.request(teamOptions[teamNumber], callback);
  request.write(number.toString());
  request.end();
}

function getNextTeamNumber(current){
  var nextTeam = current + 1;
  if (nextTeam == teamOptions.length){
    return 0;
  }
  return nextTeam;
}