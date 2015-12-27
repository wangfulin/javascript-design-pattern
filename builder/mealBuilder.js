'use strict';

var Meal = require('./meal');
var VegBurger = require('./vegBurger');
var ChickenBurger = require('./chickenBurger');
var Coke = require('./coke');
var Pepsi = require('./pepsi');

var MealBuilder = {
	prepareVegMeal: function(){
		return (function(){
			var meal = null;
			meal = new Meal();
			meal.addItem(new VegBurger());
			meal.addItem(new Coke());
			return meal;
		}());
	},
	prepareNonVegMeal: function(){
		return (function(){
			var meal = null;
			meal = new Meal();
			meal.addItem(new ChickenBurger());
			meal.addItem(new Pepsi());
			return meal;
		}());
	}
};

module.exports = MealBuilder;

