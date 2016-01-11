'use strict';

var Computer = require('./computer.js');
var Monitor = require('./monitor.js');
var Mouse = require('./mouse.js');
var Keyboard = require('./keyboard.js');

var ComputerPartVisitor = require('./computerPartVisitor.js');

function ComputerPartDisplayVisitor(){
	
}

ComputerPartDisplayVisitor.prototype = new ComputerPartVisitor();

ComputerPartDisplayVisitor.prototype.visit = function(computerPart){
	if(computerPart instanceof Computer){
		console.log('Displaying Computer.');
	}
	if(computerPart instanceof Mouse){
		console.log('Displaying Mouse.');
	}
	if(computerPart instanceof Monitor){
		console.log('Displaying Monitor.');
	}
	if(computerPart instanceof Keyboard){
		console.log('Displaying Keyboard.');
	}
};

module.exports = ComputerPartDisplayVisitor;
