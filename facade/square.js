'use strict';

var Shape = require('./shape');

function Square(){

}

Square.prototype = new Shape();

Square.prototype.draw = function(){
	console.log('Shape: Square');
};

module.exports = Square;
