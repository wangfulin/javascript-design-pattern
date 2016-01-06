'use strict';

var Image = require('./image.js');
var RealImage = require('./realImage.js');

function ProxyImage(fileName){
	this.fileName = fileName;
}

ProxyImage.prototype = new Image();

ProxyImage.prototype.display = function(){
	if(this.realImage == null){
		this.realImage = new RealImage(this.fileName);
	}
	this.realImage.display(this.fileName);
};

module.exports = ProxyImage;
