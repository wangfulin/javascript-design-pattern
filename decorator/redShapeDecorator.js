'use strict';

var ShapeDecorator = require('./shapeDecorator');

function RedShapeDecorator(shape){
	ShapeDecorator.call(this, shape);
}

RedShapeDecorator.prototype = new ShapeDecorator();

RedShapeDecorator.prototype.draw = function(){
	this.shape.draw();
	setRedBorder(this.shape);
};

function setRedBorder(shape){
	console.log('Border Color: Red');
}

module.exports = RedShapeDecorator;
