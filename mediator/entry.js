'use strict';

var User = require('./user');

var robert = new User('Robert');
var john = new User('John');

robert.sendMessage('Hi! John!');
john.sendMessage('Hello! Robert!');
