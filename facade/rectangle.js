'use strict';

var Shape = require('./shape');

function Rectangle(){

}

Rectangle.prototype = new Shape();

Rectangle.prototype.draw = function(){
	console.log('Shape: Rectangle');
};

module.exports = Rectangle;
