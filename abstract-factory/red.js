'use strict';

var Color = require('./color');

function Red(){

}

Red.prototype = new Color();

Red.prototype.fill = function(){
	console.log('You are using red filling this box');
};

module.exports = Red;


