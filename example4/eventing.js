var EventEmitter = require('events').EventEmitter;
var publisher = new EventEmitter();

publisher.on('stuff', function(){
	console.log('stuff event fired');
});

publisher.on('stuff', function(){
	console.log('other stuff event fired');
});

publisher.emit('stuff');