'use strict';

var Observer = require('./observer');

function HexaObserver(subject){
	Observer.call(this, subject);
}

HexaObserver.prototype.update = function(){
	console.log('Hexo String: ' + Number(this.subject.getState()).toString(16));
};

module.exports = HexaObserver;
