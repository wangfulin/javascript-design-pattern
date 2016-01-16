'use strict';

var StudentDaoImpl = require('./studentDaoImpl.js');

var studentDao = new StudentDaoImpl();

// print all students
var students = studentDao.getAllStudents();
var len = students.length;
for(var i=0; i<len; i++){
	console.log('Student: [RollNo : ' + students[i].getRollNo() + ', Name : ' + students[i].getName() + ']');
}

// update student
var student = students[0];
student.setName('Michael');
studentDao.updateStudent(student);

// get the student;
var stu = studentDao.getStudent(0);
console.log('Student: [RollNo : ' + stu.getRollNo() + ', Name : ' + stu.getName() + ']');
