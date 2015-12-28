'use strict';

var AdvancedMediaPlayer = require('./advancedMediaPlayer');

function Mp4Player(){

}

Mp4Player.prototype = new AdvancedMediaPlayer();

Mp4Player.prototype.playMp4 = function(fileName){
	console.log('Playing mp4 file. Name: ', fileName);
};

module.exports = Mp4Player;
