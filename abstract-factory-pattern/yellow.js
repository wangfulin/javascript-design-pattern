'use strict';

var Color = require('./color');

function Yellow(){

}

Yellow.prototype = new Color();

Yellow.prototype.fill = function(){
	console.log('You are using yellow to fill this box!');
};

module.exports = Yellow;
