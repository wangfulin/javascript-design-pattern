'use strict';

var Observer = require('./observer');
var Subject = require('./subject');

function OctalObserver(subject){
	this.subject = subject;
	this.subject.attach(this);
}

OctalObserver.prototype.update = function(){
	console.log('Octal String: ' + Number(this.subject.getState()).toString(8));
};

module.exports = OctalObserver;
