'use strict';

var Circle = require('./circle');
var Rectangle = require('./rectangle');
var RedShapeDecorator = require('./redShapeDecorator');

var circle = new Circle();

var redCircle = new RedShapeDecorator(new Circle());

var redRectangle = new RedShapeDecorator(new Rectangle());

console.log('Circle with normal border:');
circle.draw();

console.log('=====================');
console.log('Circle with red border:');
redCircle.draw();

console.log('=====================');
console.log('Rectangle with red border:');
redRectangle.draw();
