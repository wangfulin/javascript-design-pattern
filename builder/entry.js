'use strict';

var MealBuilder = require('./mealBuilder');

var vegMeal = MealBuilder.prepareVegMeal();

console.log('Veg Meal:');
vegMeal.showItems();

console.log('Total Cost:', vegMeal.getCost());

console.log('----------------------');
console.log('----------------------');

var nonVegMeal = MealBuilder.prepareNonVegMeal();

console.log('Non-Veg Meal:');
nonVegMeal.showItems();

console.log('Total Cost', nonVegMeal.getCost());
