'use strict';

var TerminalExpression = require('./terminalExpression.js');
var OrExpression = require('./orExpression.js');
var AndExpression = require('./andExpression.js');

function getMaleExpression(){
	var robert = new TerminalExpression('robert');
	var john = new TerminalExpression('john');
	return new OrExpression(robert, john);
}

function getMarriedWomanExpression(){
	var julie = new TerminalExpression('julie');
	var married = new TerminalExpression('married');
	return new AndExpression(julie, married);
}

var isMale = getMaleExpression();
var isMarriedWoman = getMarriedWomanExpression();

console.log('John is male ? ' + isMale.interpret('john'));
console.log('Julie is a married women ? ' + isMarriedWoman.interpret('married julie'));
