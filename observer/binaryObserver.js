'use strict';

var Observer = require('./observer');
var Subject = require('./subject');

function BinaryObserver(subject){
	this.subject = subject;
	this.subject.attach(this);
}

BinaryObserver.prototype.update = function(){
	console.log('Binary String: ' + Number(this.subject.getState()).toString(2));
};

module.exports = BinaryObserver;
