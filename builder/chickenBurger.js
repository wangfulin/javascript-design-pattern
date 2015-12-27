'use strict';

var Burger = require('./burger');

function ChickenBurger(){

}

ChickenBurger.prototype = new Burger();

ChickenBurger.prototype.getPrice = function(){
	return 50;
}

ChickenBurger.prototype.getName = function(){
	return 'Chicken Burger';
};

module.exports = ChickenBurger;
