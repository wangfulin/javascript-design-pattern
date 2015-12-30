'use strict';

var Strategy = require('./strategy');

function OperationAdd(){

}

OperationAdd.prototype = new Strategy();

OperationAdd.prototype.doOperation = function(num1, num2){
	return num1 + num2;
};

module.exports = OperationAdd;
