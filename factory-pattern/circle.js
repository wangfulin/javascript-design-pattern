'use strict';

var Shape = require('./shape');

function Circle(){

}

Circle.prototype = new Shape();

Circle.prototype.draw = function(){
	console.log('You are drawing a circle');
};

module.exports = Circle;
