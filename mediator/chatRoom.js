'use strict';

function ChatRoom(){

}

ChatRoom.showMessage = function(user, message){
	console.log(new Date().toLocaleString(), '[', user.getName(), '] : ', message);
};

module.exports = ChatRoom;
