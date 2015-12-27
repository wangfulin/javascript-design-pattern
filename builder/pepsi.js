'use strict';

var ColdDrink = require('./coldDrink');

function Pepsi(){

}

Pepsi.prototype = new ColdDrink();

Pepsi.prototype.getPrice = function(){
	return 35;
};

Pepsi.prototype.getName = function(){
	return 'Pepsi';
};

module.exports = Pepsi;


