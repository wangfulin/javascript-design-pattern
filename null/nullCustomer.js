'use strict';

var AbstractCustomer = require('./abstractCustomer.js');

function NullCustomer(){

}

NullCustomer.prototype = new AbstractCustomer();

NullCustomer.prototype.getName = function(){
	return 'Not Available in Customer Database';
};

NullCustomer.prototype.isNil = function(){
	return true;
};

module.exports = NullCustomer;
