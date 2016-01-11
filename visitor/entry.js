'use strict';

var Computer = require('./computer.js');
var ComputerPartDisplayVisitor = require('./computerPartDisplayVisitor.js');

var computer = new Computer();
computer.accept(new ComputerPartDisplayVisitor());
