'use strict';

var Item = require('./item');
var Wrapper = require('./wrapper');

function Burger(){
	
}

Burger.prototype = new Item();

Burger.prototype.getPacking = function(){
	return new Wrapper().getName();
};

Burger.prototype.getPrice = function(){

};

module.exports = Burger;
