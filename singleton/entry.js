'use strict';

var SingletonClass = require('./singletonClass');

var instance = SingletonClass.getInstance();
var instance1 = SingletonClass.getInstance();

instance.say();
instance1.say();

console.log('(instance === instance1):' + (instance === instance1));
