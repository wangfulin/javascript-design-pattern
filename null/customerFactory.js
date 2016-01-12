'use strict';

var RealCustomer = require('./realCustomer.js');
var NullCustomer = require('./nullCustomer.js');

function CustomerFactory(){

}

CustomerFactory.names = ['Rob', 'Joe', 'Julie'];

CustomerFactory.getCustomer = function(name){
	var len = this.names.length;
	for(var i=0; i<len; i++){
		if(name === this.names[i]){
			return new RealCustomer(name);
		}
	}
	return new NullCustomer();
}

module.exports = CustomerFactory;
