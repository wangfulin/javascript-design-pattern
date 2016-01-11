'use strict';

var Expression = require('./expression.js');

function OrExpression(expr1, expr2){
	this.expr1 = expr1;
	this.expr2 = expr2;
}

OrExpression.prototype = new Expression();

OrExpression.prototype.interpret = function(context){
	return this.expr1.interpret(context) || this.expr2.interpret(context);
};

module.exports = OrExpression;
