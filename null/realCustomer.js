'use strict';

var AbstractCustomer = require('./abstractCustomer.js');

var _name;

function RealCustomer(name){
	_name = name;
}

RealCustomer.prototype = new AbstractCustomer();

RealCustomer.prototype.getName = function(){
	return _name;
};

RealCustomer.prototype.isNil = function(){
	return false;
};

module.exports = RealCustomer;
