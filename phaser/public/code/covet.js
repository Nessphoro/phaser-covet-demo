window.game = new Phaser.Game(1280, 720, Phaser.AUTO, "");


var data = require("./data");
var content = require("./content");
var vod_main = require("./vod_main");
var vod_show = require('./vod_show.js');
debugger;
game.state.add("boot", content);
game.state.add("vod_main", vod_main);
game.state.add("vod_show", vod_show);

game.state.start("boot");