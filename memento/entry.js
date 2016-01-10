'use strict';

var Originator = require('./originator.js');
var CareTaker = require('./careTaker.js');

var originator = new Originator();
var careTaker = new CareTaker();

originator.setState('State #1');
originator.setState('State #2');
careTaker.add(originator.saveStateToMemento());

originator.setState('State #3');
careTaker.add(originator.saveStateToMemento());

originator.setState('State #4');
console.log('Current State: ' + originator.getState());

originator.getStateFromMemento(careTaker.get(0));
console.log('First saved State: ' + originator.getState());
originator.getStateFromMemento(careTaker.get(1));
console.log('Second saved State: ' + originator.getState());
