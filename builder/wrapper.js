'use strict';

var Packing = require('./packing');

function Wrapper(){

}

Wrapper.prototype = new Packing();

Wrapper.prototype.getName = function(){
	return 'Wrapper';
};

module.exports = Wrapper;
