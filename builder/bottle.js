'use strict';

var Packing = require('./packing');

function Bottle(){

}

Bottle.prototype = new Packing();

Bottle.prototype.getName = function(){
	return 'Bottle';
}

module.exports = Bottle;
