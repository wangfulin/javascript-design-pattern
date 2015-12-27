'use strict';

var ColdDrink = require('./coldDrink');

function Coke(){

}

Coke.prototype = new ColdDrink();

Coke.prototype.getPrice = function(){
	return 30;
}

Coke.prototype.getName = function(){
	return 'Coke';
};

module.exports = Coke;
