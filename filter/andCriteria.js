'use strict';

var Criteria = require('./criteria');

function AndCriteria(criteria, otherCriteria){
	this.criteria = criteria;
	this.otherCriteria = otherCriteria;
}

AndCriteria.prototype = new Criteria();

AndCriteria.prototype.meetCriteria = function(persons){
	var firstCriteriaPersons = this.criteria.meetCriteria(persons);
	return this.otherCriteria.meetCriteria(firstCriteriaPersons);
}

module.exports = AndCriteria;
