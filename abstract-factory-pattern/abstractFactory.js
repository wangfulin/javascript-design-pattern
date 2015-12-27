'use strict';

function AbstractFactory(){

}

AbstractFactory.prototype = {
	getShape: function(type){
		console.log('abstractFactory getShape');
	},
	getColor: function(type){
		console.log('abstractFactory getColor');
	}
};

module.exports = AbstractFactory;
