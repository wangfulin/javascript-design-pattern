'use strict';

var Strategy = require('./strategy');

function OperationMultiply(){

}

OperationMultiply.prototype = new Strategy();

OperationMultiply.prototype.doOperation = function(num1, num2){
	return num1 * num2;
};

module.exports = OperationMultiply;
