'use strict';

var Observer = require('./observer');

function OctalObserver(subject){
	Observer.call(this, subject);
}

OctalObserver.prototype.update = function(){
	console.log('Octal String: ' + Number(this.subject.getState()).toString(8));
};

module.exports = OctalObserver;
