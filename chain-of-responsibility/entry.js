'use strict';

var AbstractLogger = require('./abstractLogger.js');
var ErrorLogger = require('./errorLogger.js');
var FileLogger = require('./fileLogger.js');
var ConsoleLogger = require('./consoleLogger.js');

var errorLogger = new ErrorLogger(AbstractLogger.ERROR);
var fileLogger = new FileLogger(AbstractLogger.DEBUG);
var consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

errorLogger.setNextLogger(fileLogger);
fileLogger.setNextLogger(consoleLogger);

var loggerChain = errorLogger;

loggerChain.logMessage(AbstractLogger.INFO, 'This is an information');

loggerChain.logMessage(AbstractLogger.DEBUG, 'This is an debug level information');

loggerChain.logMessage(AbstractLogger.ERROR, 'This is an error information');
