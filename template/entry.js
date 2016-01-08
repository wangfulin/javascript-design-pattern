'use strict';

var Cricket = require('./cricket.js');
var Football = require('./football.js');

var game = new Cricket();
game.play();

game = new Football();
game.play();
