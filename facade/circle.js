'use strict';

var Shape = require('./shape');

function Circle(){

}

Circle.prototype = new Shape();

Circle.prototype.draw = function(){
	console.log('Shape: Circle');
};

module.exports = Circle;
