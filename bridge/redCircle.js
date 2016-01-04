'use strict';

var DrawAPI = require('./drawAPI');

function RedCircle(){
	
}

RedCircle.prototype = new DrawAPI();

RedCircle.prototype.drawCircle = function(radius, x, y){
	console.log('Drawing Circle[ color: red, radius: ' + radius + ', x: ' + x + ', y:' + y);
};

module.exports = RedCircle;
