'use strict';

var State = require('./state');

function StopState(){

}

StopState.prototype = new State();

StopState.prototype.doAction = function(context){
	console.log('Player is in stop state');
	context.setState(this);
};

StopState.prototype.toString = function(){
	console.log('Stop state');
};

module.exports = StopState;
