'use strict';

var Shape = require('./shape.js');

function Circle(color){
	this.color = color;
};

Circle.prototype = new Shape();

Circle.prototype.draw = function(){
	console.log('Circle: Draw() [Color : ' + this.color + ', x : ' +this.x + ', y : ' + this.y + ', radius: ' + this.radius);
};

Circle.prototype.setX = function(x){
	this.x = x;
};

Circle.prototype.setY = function(y){
	this.y = y;
};

Circle.prototype.setRadius = function(radius){
	this.radius = radius;
};

module.exports = Circle;
