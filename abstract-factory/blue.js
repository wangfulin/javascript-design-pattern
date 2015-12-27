'use strict';

var Color = require('./color');

function Blue(){

}

Blue.prototype = new Color();

Blue.prototype.fill = function(){
	console.log('You are using blue to fill this box!');
};

module.exports = Blue;
