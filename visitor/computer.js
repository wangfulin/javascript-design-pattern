'use strict';

var Keyboard = require('./keyboard.js');
var Monitor = require('./monitor.js');
var Mouse = require('./mouse.js');
var ComputerPart = require('./computerPart.js');

function Computer(){
	this.parts = new Array(new Keyboard(), new Monitor(), new Mouse());
}

Computer.prototype = new ComputerPart();

Computer.prototype.accept = function(computerPartVisitor){
	var len = this.parts.length;
	for(var i=0; i<len; i++){
		this.parts[i].accept(computerPartVisitor);
	}
	computerPartVisitor.visit(this);
};

module.exports = Computer;
