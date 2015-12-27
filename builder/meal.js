'use strict';

function Meal(){

}

Meal.prototype = {
	items: [],
	addItem: function(item){
		this.items.push(item);
	},
	getCost: function(){
		var cost = 0;
		for(var index in this.items){
			cost = cost + this.items[index].getPrice();
		}
		return cost;
	},
	showItems: function(){
		for(var index in this.items){
 			var item = this.items[index];
			console.log('Item :', item.getName() );
			console.log('Packing : ', item.getPacking());
			console.log('Price : ', item.getPrice());
		}
	}
};

module.exports = Meal;
