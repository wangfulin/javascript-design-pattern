'use strict';

var NameRepository = require('./nameRepository');

var nameRepository = new NameRepository();

for(var iter = nameRepository.getIterator(); iter.hasNext();){
	var name = iter.next();
	console.log('Name: ', name);
}
