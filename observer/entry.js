'use strict';

var Subject = require('./subject');

var BinaryObserver = require('./binaryObserver');
var OctalObserver = require('./octalObserver');
var HexaObserver = require('./hexaObserver');

var subject = new Subject();

new BinaryObserver(subject);
new OctalObserver(subject);
new HexaObserver(subject);

console.log('First state change: 15');
subject.setState(15);

console.log('------------------------');
console.log('------------------------');
console.log('Second state change: 10');
subject.setState(10);
