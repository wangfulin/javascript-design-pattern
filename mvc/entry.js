'use strict';

var Student = require('./student');
var StudentView = require('./studentView');
var StudentController = require('./studentController');

var model = retriveStudentFromDatabase();

var view = new StudentView();

var controller = new StudentController(model, view);

controller.setStudentName('John');

controller.updateView();

function retriveStudentFromDatabase(){
	var student = new Student();
	student.setName('Robert');
	student.setRollNo('10');
	return student;
}
