'use strict';

var State = require('./state');

function StartState(){

}

StartState.prototype = new State();

StartState.prototype.doAction = function(context){
	console.log('Player is in start state');
	context.setState(this);
};

StartState.prototype.toString = function(){
	console.log('Start State');
};

module.exports = StartState;
