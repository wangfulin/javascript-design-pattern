'use strict';

function Subject(){

}

Subject.prototype = {
	observers: [],
	state: 0,
	getState: function(){
		return this.state;
	},
	setState: function(state){
		this.state = state;
		this.notifyAllObservers();
	},
	attach: function(observer){
		this.observers.push(observer);
	},
	notifyAllObservers: function(){
		var len = this.observers.length;
		console.log(len);
		for(var i=0; i<len; i++){
			this.observers[i].update();
		}
	}
};

module.exports = Subject;
