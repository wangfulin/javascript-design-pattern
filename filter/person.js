'use strict';

function Person(name, gender, maritalStatus){
	this.name = name;
	this.gender = gender;
	this.maritalStatus = maritalStatus;
}

Person.prototype = {
	getName: function(){
		return this.name;
	},
	getGender: function(){
		return this.gender;
	},
	getMaritalStatus: function(){
		return this.maritalStatus;
	}
};

module.exports = Person;
