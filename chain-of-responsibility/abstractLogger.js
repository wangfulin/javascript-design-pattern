'use strict';

function AbstractLogger(){

}

AbstractLogger.INFO = 1;
AbstractLogger.DEBUG = 2;
AbstractLogger.ERROR = 3;

AbstractLogger.prototype = {
	setNextLogger: function(nextLogger){
		this.nextLogger = nextLogger;
	},
	logMessage: function(level, message){
		if(this.level <= level){
			this.write(message);
		}
		if(this.nextLogger != null){
			this.nextLogger.logMessage(level, message);
		}
	},
	write: function(message){

	}
};

module.exports = AbstractLogger;
