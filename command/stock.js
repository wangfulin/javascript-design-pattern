'use strict';

function Stock(){
	this.name = 'ABC';
	this.quantity = 10;
}

Stock.prototype = {
	buy: function(){
		console.log('Stock [ Name: ' + this.name + ' , Quantity: ' + this.quantity + ' ] bought');
	},
	sell: function(){
		console.log('Stock [ Name: ' + this.name + ' , Quantity: ' + this.quantity + ' ] sold');
	}
};

module.exports = Stock;


