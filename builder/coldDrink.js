'use strict';

var Item = require('./item');
var Bottle = require('./bottle');

function ColdDrink(){

}

ColdDrink.prototype = new Item();

ColdDrink.prototype.getPacking = function(){
	return new Bottle().getName();
};

ColdDrink.prototype.getPrice = function(){
	
};

module.exports = ColdDrink;
