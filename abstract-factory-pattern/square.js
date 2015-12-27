'use strict';

var Shape = require('./Shape');

function Square(){

}

Square.prototype = new Shape;

Square.prototype.draw = function(){
	console.log('You are drawing a square');
};
 
module.exports = Square;
