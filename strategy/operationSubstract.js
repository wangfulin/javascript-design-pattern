'use strict';

var Strategy = require('./strategy');

function OperationSubstract(){

}

OperationSubstract.prototype = new Strategy();

OperationSubstract.prototype.doOperation = function(num1, num2){
	return num1 - num2;
};

module.exports = OperationSubstract;
