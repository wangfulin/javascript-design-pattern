'use strict';

var Iterator = require('./iterator');
var Container = require('./container');

function NameRepository(){
	
}

NameRepository.prototype = new Container();

NameRepository.prototype = {
	names: ['Robert', 'John', 'Julie', 'Lora'],
	getIterator: function(){
		var _self = this;
		function NameIterator(){

		}
		
		NameIterator.prototype = new Iterator();

		NameIterator.prototype = {
			index: 0,
			hasNext: function(){
				if(this.index < _self.names.length){
					return true;
				}else{
					return false;
				}
			},
			next: function(){
				if(this.hasNext()){
					return _self.names[this.index++];
				}
				return null;
			}
		};		
		return new NameIterator();
	}
};

module.exports = NameRepository;
