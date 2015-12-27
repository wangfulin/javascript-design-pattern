'use strict';

var Burger = require('./burger');

function VegBurger(){

}

VegBurger.prototype = new Burger();

VegBurger.prototype.getPrice = function(){
	return 25;
};

VegBurger.prototype.getName = function(){
	return 'Veg Burger';
};

module.exports = VegBurger;
