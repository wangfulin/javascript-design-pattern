'use strict';

var Context = require('./context');
var OperationAdd = require('./operationAdd');
var OperationSubstract = require('./operationSubstract');
var OperationMultiply = require('./operationMultiply');

var context1 = new Context(new OperationAdd());
var res1 = context1.executeStrategy(3, 4);
console.log('3 + 4 = ', res1);

var context2 = new Context(new OperationSubstract());
var res2 = context2.executeStrategy(3, 4);
console.log('3 - 4 = ', res2);

var context3 = new Context(new OperationMultiply());
var res3 = context3.executeStrategy(3, 4);
console.log('3 * 4 = ', res3);
