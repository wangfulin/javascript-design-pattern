'use strict';

var Square = require('./square');
var Circle = require('./circle');
var Rectangle = require('./rectangle');

var shapeFactory = {
	getShape : function(type){
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
	}
}

module.exports = shapeFactory;
