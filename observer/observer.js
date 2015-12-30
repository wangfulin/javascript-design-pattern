'use strict';

function Observer(subject){
	this.subject = subject;
	this.subject.attach(this);
}

Observer.prototype = {
	update: function(){

	}
};

module.exports = Observer;
