'use strict';

var SingletonClass = (function(){
	function SingletonClass(){

	}
	SingletonClass.prototype.say = function(){
		console.log('I am a singleton');
	};
	var instance;
	return {
		getInstance: function(){
			if(instance == null){
				instance = new SingletonClass();
				SingletonClass.constructor = null;
			}
			return instance;
		}
	};
})();

module.exports = SingletonClass;
