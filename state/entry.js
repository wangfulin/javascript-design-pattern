'use strict';

var Context = require('./context');
var StartState = require('./startState');
var StopState = require('./stopState');

var context = new Context();

var startState = new StartState();
startState.doAction(context);

context.getState().toString();

var stopState = new StopState();
stopState.doAction(context);

context.getState().toString();
