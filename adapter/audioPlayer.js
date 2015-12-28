'use strict';

var MediaPlayer = require('./mediaPlayer');
var MediaAdapter = require('./mediaAdapter');

function AudioPlayer(){

}

AudioPlayer.prototype = new MediaPlayer();

AudioPlayer.prototype.play = function(audioType, fileName){
	if(audioType === 'mp3'){
		console.log('Playing mp3 file. Name: ', fileName);
	}else if(audioType === 'mp4' || audioType === 'vlc'){
		new MediaAdapter().play(audioType, fileName);
	}
};

module.exports = AudioPlayer;
