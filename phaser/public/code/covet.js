window.game = new Phaser.Game(1280, 720, Phaser.AUTO, "");


var data = require("./data");
var content = require("./content");
var vod_main = require("./vod_main");
var vod_show = require('./vod_show.js');
var youmightlike = require("./youmightlike.js");
var player = require('./player.js');
var vod_look = require("./vod_look.js");
var vod_items = require("./vod_items.js");

game.state.add("boot", content);
game.state.add("vod_like", youmightlike);
game.state.add("vod_main", vod_main);
game.state.add("vod_show", vod_show);
game.state.add("vod_look", vod_look);
game.state.add("vod_items", vod_items);
game.state.add("player", player);

game.state.start("boot");