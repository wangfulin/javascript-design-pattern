'use strict';

function Color(){

}

Color.prototype.fill = function(){
	console.log('This is a method to be overritten!');
}

module.exports = Color;
