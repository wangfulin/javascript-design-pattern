'use strict';

var StudentDao = require('./studentDao.js');
var Student = require('./student.js');

var _students = null;
function StudentDaoImpl(){
	_students = new Array();
	var student1 = new Student('Robert', 0);
	var student2 = new Student('John', 1);
	_students.push(student1);
	_students.push(student2);
}

StudentDaoImpl.prototype = new StudentDao();

StudentDaoImpl.prototype.getAllStudents = function(){
	return _students;
};

StudentDaoImpl.prototype.deleteStudent = function(student){
	var newStudents = new Array();
	var len = _students.length;
	for(var i=0; i<len; i++){
		if(!_students[i] === student){
			newStudents.push(_students[i]);	
		}
	}
	_students = newStudents;
	console.log('Student: Roll No ' + student.getRollNo() + ', delete from database');
};

StudentDaoImpl.prototype.getStudent = function(rollNo){
	return _students[rollNo];
};

StudentDaoImpl.prototype.updateStudent = function(student){
	_students[student.getRollNo()].setName(student.getName());
	console.log('Student: Roll no ' + student.getRollNo() + ', updated in the database');
};

module.exports = StudentDaoImpl;
