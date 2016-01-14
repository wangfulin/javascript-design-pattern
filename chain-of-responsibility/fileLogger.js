'use strict';

var AbstractLogger = require('./abstractLogger.js');

function FileLogger(level){
	this.level = level;
}

FileLogger.prototype = new AbstractLogger();

FileLogger.prototype.write = function(message){
	console.log('File::Logger: ' + message);
};

module.exports = FileLogger;
