'use strict';

function Shape(){

}

Shape.prototype.draw = function(){
	console.log('You are drawing a shape');
}

module.exports = Shape;
