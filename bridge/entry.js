'use strict';

var RedCircle = require('./redCircle');
var GreenCircle = require('./greenCircle');
var Circle = require('./circle');

var redCircle = new Circle(100, 100, 10, new RedCircle());
var greenCircle = new Circle(100, 100, 10, new GreenCircle());

redCircle.draw();
greenCircle.draw();
