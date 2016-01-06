'use strict';

var Image = require('./image.js');

function RealImage(fileName){
	this.fileName = fileName;
	this.loadFromDisk(fileName);
}

RealImage.prototype = new Image();

RealImage.prototype.display = function(){
	console.log('Displaying ' + this.fileName);
};

RealImage.prototype.loadFromDisk = function(fileName){
	console.log('Loading ' + fileName);
};

module.exports = RealImage;
