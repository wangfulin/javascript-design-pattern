'use strict';

var Employee = require('./employee');

var CEO = new Employee('John', 'CEO', 300000);

var headSales = new Employee('Robert', 'Head Sales', 20000);

var headMarketing = new Employee('Micheal', 'Head Marketing', 25000);

var salesExecutive1 = new Employee('Richard', 'Sales', 10000);
var salesExecutive2 = new Employee('Rob', 'Sales', 10000);

var clerk1 = new Employee('Laura', 'Marketing', 10000);
var clerk2 = new Employee('Bob', 'Marketing', 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

// Print all employees of the organization

console.log(CEO.toString());

for(var i in CEO.getSubordinates()){
	console.log(CEO.getSubordinates().length);
	var headWhatever = CEO.getSubordinates()[i];
	console.log(headWhatever.toString());
	for(var j in headWhatever.getSubordinates()){
		var clerk = headWhatever.getSubordinates()[j];
		console.log(clerk.toString());
	}
}
