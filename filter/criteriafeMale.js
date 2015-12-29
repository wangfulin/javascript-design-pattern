'use strict';

var Criteria = require('./criteria');

function CriteriaFemale(){

}

CriteriaFemale.prototype = new Criteria();

CriteriaFemale.prototype = {
	meetCriteria: function(persons){
		var femalePersons = new Array();
		var len = persons.length;
		for(var i=0; i<len; i++){
			if(persons[i].getGender() === 'Female'){
				femalePersons.push(persons[i]);
			}
		}
		return femalePersons;
	}
};

module.exports = CriteriaFemale;
