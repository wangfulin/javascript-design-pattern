'use strict';

var MediaPlayer = require('./mediaPlayer');
var VlcPlayer = require('./vlcPlayer');
var Mp4Player = require('./mp4Player');


function MediaAdapter(){

}

MediaAdapter.prototype = new MediaPlayer();

MediaAdapter.prototype.play = function(audioType, fileName){
	if(audioType === 'mp4'){
		new Mp4Player().playMp4(fileName);
	}else if(audioType === 'vlc'){
		new VlcPlayer().playVlc(fileName);
	}
};

module.exports = MediaAdapter;
