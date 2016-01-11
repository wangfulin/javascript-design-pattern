'use strict';

var Expression = require('./expression.js');

function AndExpression(expr1, expr2){
	this.expr1 = expr1;
	this.expr2 = expr2;
}

AndExpression.prototype = new Expression();

AndExpression.prototype.interpret = function(context){
	return this.expr1.interpret(context) || this.expr2.interpret(context);
};

module.exports = AndExpression;
