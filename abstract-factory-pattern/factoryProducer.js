'use strict';

var ColorFactory = require('./colorFactory');

var ShapeFactory = require('./shapeFactory');

var factoryProducer = {
	getFactory: function(type){
		if(!type) return null;
		if(type === 'color'){
			return new ColorFactory();
		}else if(type === 'shape'){
			return new ShapeFactory();
		}
		return null;
	}
};

module.exports = factoryProducer;
