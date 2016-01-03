'use strict';

function Context(){
	this.state = null;
}

Context.prototype = {
	setState: function(state){
		this.state = state;
	},
	getState: function(){
		return this.state;
	}
};

module.exports = Context;
