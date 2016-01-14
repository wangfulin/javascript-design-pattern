'use strict';

var AbstractLogger = require('./abstractLogger.js');

function ConsoleLogger(level){
	this.level = level;
}

ConsoleLogger.prototype = new AbstractLogger();

ConsoleLogger.prototype.write = function(message){
	console.log('Standard Console::Logger: ' + message);
};

module.exports = ConsoleLogger;
