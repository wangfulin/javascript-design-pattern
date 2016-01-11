'use strict';

var ComputerPart = require('./computerPart.js');

function Monitor(){

}

Monitor.prototype = new ComputerPart();

Monitor.prototype.accept = function(computerPartVisitor){
	computerPartVisitor.visit(this);
};

module.exports = Monitor;
