'use strict';

var _name = '';
var _rollNo = null;

function Student(name, rollNo){
	_name = name;
	_rollNo = rollNo;
}

Student.prototype.getName = function(){
	return _name;
};

Student.prototype.setName = function(name){
	_name = name;
};

Student.prototype.getRollNo = function(){
	return _rollNo;
};

Student.prototype.setRollNo = function(rollNo){
	_rollNo = rollNo;
};

module.exports = Student;
