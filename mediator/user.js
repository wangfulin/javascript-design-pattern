'use strict';

var ChatRoom = require('./chatRoom');

function User(name){
	this.name = name;
}

User.prototype = {
	getName: function(){
		return this.name;
	},
	setName: function(name){
		this.name = name;
	},
	sendMessage: function(message){
		ChatRoom.showMessage(this, message);
	}
};

module.exports = User;
