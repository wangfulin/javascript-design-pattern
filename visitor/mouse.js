'use strict';

var ComputerPart = require('./computerPart.js');

function Mouse(){

}

Mouse.prototype = new ComputerPart();

Mouse.prototype.accept = function(computerPartVisitor){
	computerPartVisitor.visit(this);
};

module.exports = Mouse;
