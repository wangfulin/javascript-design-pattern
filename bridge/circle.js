'use strict';

var Shape = require('./shape');

function Circle(x, y, radius, drawAPI){
	Shape.call(this, drawAPI);
	this.x = x;
	this.y = y;
	this.radius = radius;
}

Circle.prototype = new Circle();

Circle.prototype.draw = function(){
	this.drawAPI.drawCircle(this.radius, this.x, this.y);
};

module.exports = Circle;
