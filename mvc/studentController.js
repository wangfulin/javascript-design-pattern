'use strict';

function StudentController(model, view){
	this.model = model;
	this.view = view;
}

StudentController.prototype = {
	setStudentName: function(name){
		this.model.setName(name);
	},
	getStudentName: function(){
		this.model.getName();
	},
	setStudentRollNo: function(rollNo){
		this.model.setRollNo(rollNo);
	},
	updateView: function(){
		this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
	}
};

module.exports = StudentController;
