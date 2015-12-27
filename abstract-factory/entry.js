'use strict';

var factoryProducer = require('./factoryProducer');

var shapeFactory = factoryProducer.getFactory('shape');
var colorFactory = factoryProducer.getFactory('color');

var circle = shapeFactory.getShape('circle'); 
circle.draw();

var square = shapeFactory.getShape('square');
square.draw();

var rectangle = shapeFactory.getShape('rectangle');
rectangle.draw();

var blue = colorFactory.getColor('blue');
blue.fill();

var red = colorFactory.getColor('red');
red.fill();

var yellow = colorFactory.getColor('yellow');
yellow.fill();
