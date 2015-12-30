'use strict';

var Observer = require('./observer');

function BinaryObserver(subject){
	Observer.call(this, subject);
}

BinaryObserver.prototype.update = function(){
	console.log('Binary String: ' + Number(this.subject.getState()).toString(2));
};

module.exports = BinaryObserver;
