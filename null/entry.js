'use strict';

var CustomerFactory = require('./customerFactory.js');

var customer1 = CustomerFactory.getCustomer('Bob');
var customer2 = CustomerFactory.getCustomer('Rob');
var customer3 = CustomerFactory.getCustomer('Julie');
var customer4 = CustomerFactory.getCustomer('Laura');

console.log('Customers:');
console.log(customer1.getName());
console.log(customer2.getName());
console.log(customer3.getName());
console.log(customer4.getName());
