'use strict';

var Criteria = require('./criteria');

function CriteriaMale(){

}

CriteriaMale.prototype = new Criteria();

CriteriaMale.prototype.meetCriteria = function(persons){
	var malePersons = new Array();
	var len = persons.length;
	for(var i=0; i<len; i++){
		if(persons[i].getGender() === 'Male'){
			malePersons.push(persons[i]);
		}
	}
	return malePersons;
}

module.exports = CriteriaMale;
