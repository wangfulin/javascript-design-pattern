'use strict';

function Context(strategy){
	this.strategy = strategy;
}

Context.prototype.executeStrategy = function(num1, num2){
	return this.strategy.doOperation(num1, num2);
};

module.exports = Context;
