'use strict';

var Stock = require('./stock');

function BuyStock(stock){
	this.stock = stock;
}

BuyStock.prototype = new Stock();

BuyStock.prototype.execute = function(){
	this.stock.buy();
};

module.exports = BuyStock;
