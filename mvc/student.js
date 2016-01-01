'use strict';

function Student(rollNo, name){
	this.rollNo = rollNo;
	this.name = name;
}

Student.prototype = {	
	getRollNo: function(){
		return this.rollNo;
	},
	getName: function(){
		return this.name;
	},
	setRollNo: function(rollNo){
		this.rollNo = rollNo;
	},
	setName: function(name){
		this.name = name;
	}
};

module.exports = Student;
