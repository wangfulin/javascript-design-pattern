'use strict';

var ShapeFactory = require('./shapeFactory.js');

var colors = ['Red', 'Green', 'Blue', 'White', 'Black'];

for(var i=0; i<20; i++){
	var circle = new ShapeFactory().getCircle(getRandomColor());
	circle.setX(getRandomX());
	circle.setY(getRandomY());
	circle.setRadius(100);
	circle.draw();
}

function getRandomColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomX(){
	return Math.floor(Math.random() * 100);
}

function getRandomY(){
	return Math.floor(Math.random() * 200);
}
