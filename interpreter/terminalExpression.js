'use strict';

var Expression = require('./expression.js');

function TerminalExpression(data){
	this.data = data;
}

TerminalExpression.prototype = new Expression();

TerminalExpression.prototype.interpret = function(context){
	if(context.indexOf(this.data) != -1){
		return true;
	}
	return false;
};

module.exports = TerminalExpression;
