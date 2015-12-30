'use strict';

var Order = require('./order');

function SellStock(stock){
	this.stock = stock;
}

SellStock.prototype = new Order();

SellStock.prototype.execute = function(){
	this.stock.sell();
};

module.exports = SellStock;
