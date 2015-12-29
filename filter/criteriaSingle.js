'use strict';

var Criteria = require('./criteria');

function CriteriaSingle(){

}

CriteriaSingle.prototype = new Criteria();

CriteriaSingle.prototype.meetCriteria = function(persons){
	var singlePersons = new Array();
	var len = persons.length;
	for(var i=0; i<len; i++){
		if(persons[i].getMaritalStatus() === 'Single'){
			singlePersons.push(persons[i]);
		}
	}
	return singlePersons;
};

module.exports = CriteriaSingle;


