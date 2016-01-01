'use strict';

function StudentView(){

}

StudentView.prototype.printStudentDetails = function(studentName, studentRollNo){
	console.log('Student:');
	console.log('Name: ' + studentName);
	console.log('Roll No: ' + studentRollNo);
}

module.exports = StudentView;
