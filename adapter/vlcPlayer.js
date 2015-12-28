'use strict';

var AdvancedMediaPlayer = require('./advancedMediaPlayer');

function VlcPlayer(){

}

VlcPlayer.prototype = new AdvancedMediaPlayer();

VlcPlayer.prototype.playVlc = function(fileName){
	console.log('Playing vlc file. Name: ', fileName);
};

module.exports = VlcPlayer;
