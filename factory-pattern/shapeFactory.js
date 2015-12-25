'use strict';

var Square = require('./square');
var Circle = require('./circle');

var shapeFactory = {
	getShape : function(type){
		if(!type){
			return null;
		}
		if(type === 'square'){
			return new Square();
		}else if(type === 'circle'){
			return new Circle();
		}
		return null;
	}
}

module.exports = shapeFactory;
