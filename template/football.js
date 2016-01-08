'use strict';

var Game = require('./game.js');

function Football(){

}

Football.prototype = new Game();

Football.prototype.initialize = function(){
	console.log('Football Game Initialized! Start playing.');
};

Football.prototype.startPlay = function(){
	console.log('Football Game Started. Enjoy the game!');
};

Football.prototype.endPlay = function(){
	console.log('Football Game Finished!');
};

module.exports = Football;
