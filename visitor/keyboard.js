'use strict';

var ComputerPart = require('./computerPart.js');

function Keyboard(){

}

Keyboard.prototype = new ComputerPart();

Keyboard.prototype.accept = function(computerPartVisitor){
	computerPartVisitor.visit(this);
};

module.exports = Keyboard;
