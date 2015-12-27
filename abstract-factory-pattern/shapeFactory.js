'use strict';

var AbstractFactory = require('./abstractFactory');
var Square = require('./square');
var Circle = require('./circle');
var Rectangle = require('./rectangle');

function ShapeFactory(){

}

ShapeFactory.prototype = new AbstractFactory();

ShapeFactory.prototype.getShape = function(type){
		if(!type){
			return null;
		}
		if(type === 'square'){
			return new Square();
		}else if(type === 'circle'){
			return new Circle();
		}else if(type === 'rectangle'){
			return new Rectangle();
		}
		return null;
};

module.exports = ShapeFactory;
