'use strict';

function ShapeDecorator(shape){
	this.shape = shape;
}

ShapeDecorator.prototype = {
	draw: function(){
		this.shape.draw();
	}
};

module.exports = ShapeDecorator;

