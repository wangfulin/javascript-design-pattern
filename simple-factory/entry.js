'use strict';

var shapeFactory = require('./shapeFactory');

var circle = shapeFactory.getShape('circle'); 
circle.draw();

var square = shapeFactory.getShape('square');
square.draw();

var rectangle = shapeFactory.getShape('rectangle');
rectangle.draw();
