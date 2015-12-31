'use strict';

function Employee(name, dept, sal){
	this.name = name;
	this.dept = dept;
	this.sal = sal;
}

Employee.prototype = {
	subordinates: [],
	add: function(context, employee){
		context.subordinates.push(employee);
	},
	remove: function(employee){
		var subordinates = this.subordinates;
		delete this.subordinates;
		this.subordinates = [];
		for(var i in subordinates){
			if(subordinates[i] != employee){
				this.subordinates.push(subordinates[i]);
			}
		}
		if(this.subordinates == subordinates){
			return false;
		}else{
			return true;
		}
	},
	getSubordinates: function(){
		return this.subordinates;
	},
	toString: function(){
		return ('Employee :[ Name : ' + this.name + ', Department : ' + this.dept + ', Salary:' + this.sal + '] ');
	}
};

module.exports = Employee;
