'use strict';

var Memento = require('./memento.js');

function Originator(state){
	this.state = state;
}

Originator.prototype = {
	setState: function(state){
		this.state = state;
	},
	getState: function(){
		return this.state;
	},
	saveStateToMemento: function(){
		return new Memento(this.state);
	},
	getStateFromMemento: function(memento){
		this.state = memento.getState();
	}
};

module.exports = Originator;
