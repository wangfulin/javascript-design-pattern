'use strict';

var Game = require('./game.js');

function Cricket(){

}

Cricket.prototype = new Game();

Cricket.prototype.initialize = function(){
	console.log('Cricket Game Initlialized! Start playing.');
};

Cricket.prototype.startPlay = function(){
	console.log('Cricket Game Started. Enjoy the game!');
};

Cricket.prototype.endPlay = function(){
	console.log('Cricket Game Finished!');
};

module.exports = Cricket;
