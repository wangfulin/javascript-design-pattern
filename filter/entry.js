'use strict';

var Person = require('./person');
var CriteriaMale = require('./criteriaMale');
var CriteriaFemale = require('./criteriaFemale');
var CriteriaSingle = require('./criteriaSingle');
var AndCriteria = require('./andCriteria');
var OrCriteria = require('./orCriteria');

var persons = new Array();

persons.push(new Person('Robert', 'Male', 'Single'));
persons.push(new Person('John', 'Male', 'Married'));
persons.push(new Person('Laura', 'Female', 'Married'));
persons.push(new Person('Diana', 'Female', 'Single'));
persons.push(new Person('Mike', 'Male', 'Single'));
persons.push(new Person('Bobby', 'Male', 'Single'));
var male = new CriteriaMale();
var female = new CriteriaFemale();
var single = new CriteriaSingle();
var singleMale = new AndCriteria(single, male);
var singleOrFemale = new OrCriteria(single, female);

console.log('Males: ');
printPersons(male.meetCriteria(persons));

console.log('Females: ');
printPersons(female.meetCriteria(persons));

console.log('Singles: ');
printPersons(single.meetCriteria(persons));

console.log('SingleMales: ');
printPersons(singleMale.meetCriteria(persons));

console.log('SingleOrFemale: ');
printPersons(singleOrFemale.meetCriteria(persons));


function printPersons(persons){
	var len = persons.length;
	for(var i=0; i<len; i++){
		console.log('Persons: [ Name: ', persons[i].getName(), ', Gender: ', persons[i].getGender(), ', MaritalStatus: ', persons[i].getMaritalStatus());
	}
}

