'use strict';

function CareTaker(){
	this.mementoList = [];
}

CareTaker.prototype = {
	add: function(memento){
		this.mementoList.push(memento);
	},
	get: function(index){
		return this.mementoList[index];
	}
};

module.exports = CareTaker;
