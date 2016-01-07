'use strict';

var Circle = require('./circle.js');

function ShapeFactory(){
	this.circleMap = {};
}

ShapeFactory.prototype.getCircle = function(color){
	if(this.circleMap[color]){
		return this.circleMap[color];
	}else{
		var circle = new Circle(color);
		return this.circleMap[color] = circle;
	}
};

module.exports = ShapeFactory;
