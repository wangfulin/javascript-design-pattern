'use strict';

var AbstractFactory = require('./abstractFactory');

var Blue = require('./blue');
var Red = require('./red');
var Yellow = require('./yellow');

function ColorFactory(){

}

ColorFactory.prototype = new AbstractFactory();

ColorFactory.prototype.getColor = function(type){
	if(!type) return null;
	if(type === 'blue'){
		return new Blue();
	}else if(type === 'red'){
		return new Red();
	}else if(type === 'yellow'){
		return new Yellow();
	}
	return null;
};

module.exports = ColorFactory;
