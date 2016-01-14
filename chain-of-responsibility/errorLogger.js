'use strict';

var AbstractLogger = require('./abstractLogger.js');

function ErrorLogger(level){
	this.level = level;
}

ErrorLogger.prototype = new AbstractLogger();

ErrorLogger.prototype.write = function(message){
	console.log('Error Console::Logger: ' + message);
};

module.exports = ErrorLogger;
