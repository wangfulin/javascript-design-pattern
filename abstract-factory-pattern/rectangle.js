'use strict';

var Shape = require('./shape');

function Rectangle(){

}

Rectangle.prototype = new Shape();

Rectangle.prototype.draw = function(){
	console.log('You are drawing rectangle');
};

module.exports = Rectangle;
