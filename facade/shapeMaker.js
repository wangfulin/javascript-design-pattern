'use strict';

var Circle = require('./circle');
var Rectangle = require('./rectangle');
var Square = require('./square');

function ShapeMaker(){
	this.circle = new Circle();
	this.rectangle = new Rectangle();
	this.square = new Square();
}

ShapeMaker.prototype = {
	drawCircle: function(){
		this.circle.draw();
	},
	drawRectangle: function(){
		this.rectangle.draw();
	},
	drawSquare: function(){
		this.square.draw();
	}
};

module.exports = ShapeMaker;
