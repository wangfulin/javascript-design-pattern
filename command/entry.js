'use strict';

var Stock = require('./stock');
var BuyStock = require('./buyStock');
var SellStock = require('./sellStock');
var Broker = require('./broker');

var abcStock = new Stock();

var buyStockOrder = new BuyStock(abcStock);
var sellStockOrder = new SellStock(abcStock);

var broker = new Broker();

broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);
broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);

broker.placeOrders();


