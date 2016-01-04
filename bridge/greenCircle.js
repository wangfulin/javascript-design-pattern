'use strict';

var DrawAPI = require('./drawAPI');

function GreenCircle(){

}

GreenCircle.prototype = new DrawAPI();

GreenCircle.prototype.drawCircle = function(radius, x, y){
	console.log('Drawing Circle[ color: green, radius: ' + radius + ', x:' + x + ', y:' + y);
};

module.exports = GreenCircle;
