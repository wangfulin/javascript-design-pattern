'use strict';

var Observer = require('./observer');
var Subject = require('./subject');

function HexaObserver(subject){
	this.subject = subject;
	this.subject.attach(this);
}

HexaObserver.prototype.update = function(){
	console.log('Hexo String: ' + Number(this.subject.getState()).toString(16));
};

module.exports = HexaObserver;
