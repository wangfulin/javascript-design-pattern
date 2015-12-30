'use strict';

function Broker(){

}

Broker.prototype = {
	orderList: [],
	takeOrder: function(order){
		this.orderList.push(order);
	},
	placeOrders: function(){
		for(var index in this.orderList){
			this.orderList[index].execute();
		}
		delete this.orderList;
		this.orderList = [];
	}
};

module.exports = Broker;
