'use strict';

var Criteria = require('./criteria');

function OrCriteria(criteria, otherCriteria){
	this.criteria = criteria;
	this.otherCriteria = otherCriteria;
}

OrCriteria.prototype = new Criteria();

OrCriteria.prototype.meetCriteria = function(persons){
	var firstCriteriaPersons = this.criteria.meetCriteria(persons);
	var otherCriteriaPersons = this.otherCriteria.meetCriteria(persons);

	var len = firstCriteriaPersons.length;
	for(var i=0; i<len; i++){
		if(!contains(otherCriteriaPersons, firstCriteriaPersons[i])){
			otherCriteriaPersons.push(firstCriteriaPersons[i]);
		}	
	}
	return otherCriteriaPersons;
};

function contains(arr, ele){
	var len = arr.length;
	for(var i=0; i<len; i++){
		if(arr[i] == ele){
			return true;
		}
	}
	return false;
}

module.exports = OrCriteria;
