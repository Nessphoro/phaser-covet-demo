var cache = require("./data.js").cache;

var texts = ["Mindy Kaling", "Danny Castilano", "Jeremy Reed", "Morgan Tooker"]
var scrolled = false;
exports.create = function ()
{
    vd.addToWorld(0, 0, 0, 0, 1.77778, 1.77778);
    vd.play(true);
    
    var overlay = game.add.sprite(0, 0, "vod_overlay");
    overlay.scale.setTo(0.5, 0.5);
    var top_shadow = game.add.sprite(322, 0, "vod_shadow_top");
    var logo = game.add.sprite(1048, 25, "vod_logo");
    logo.scale.setTo(0.5, 0.5);

    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    contentgroup = game.add.group();
    
    var vod_static = game.add.sprite(351, 107, 'vod_show_static', null, contentgroup);
    vod_static.scale.setTo(0.5, 0.5);
    
    var vod_side = game.add.sprite(0, 0, 'vod_side');
    vod_side.scale.setTo(0.5, 0.5);
    
    window.vod_green = game.add.sprite(65, 147.5 - 37.5 * 0, 'vod_green_text');
    vod_green.scale.setTo(0.5, 0.5);
    
    var text1 = game.add.text(75, 147.5 - 37.5 * 2 + 5, "Search", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text2 = game.add.text(75, 147.5 - 37.5 * 1 + 5, "My videos", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text3 = game.add.text(75, 147.5 - 37.5 * 0 + 5, "You might like", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text4 = game.add.text(75, 147.5 - 37.5 * -1 + 5, "CovetTV", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text5 = game.add.text(75, 147.5 - 37.5 * -2 + 5, "Featured", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text6 = game.add.text(75, 147.5 - 37.5 * -3 + 5, "New releases", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text7 = game.add.text(75, 147.5 - 37.5 * -4 + 5, "Movies", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text8 = game.add.text(75, 147.5 - 37.5 * -5 + 5, "Staff picks", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text9 = game.add.text(75, 147.5 - 37.5 * -6 + 5, "Optik Local", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text10 = game.add.text(75, 147.5 - 37.5 * -7 + 5, "En francais", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text11 = game.add.text(75, 147.5 - 37.5 * -8 + 5, "Adult only", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text12 = game.add.text(75, 147.5 - 37.5 * -9 + 5, "Help centre", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    var text13 = game.add.text(75, 147.5 - 37.5 * -10 + 5, "Display style", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" })
    showText = game.add.text(0, 296 + 264 + 10, texts[0], { font: 'normal normal normal "Avenir Next"', fontWeight: "400", fill: "#DCDCDC", fontSize: "20px" }, contentgroup)
    showText.anchor.x = Math.round(showText.width * 0.5) / showText.width;
    
    
    window.vod_box = game.add.sprite(352 + 220 * 0, 296, "vod_box", null, contentgroup);
    vod_box.scale.setTo(0.5, 0.5);
    
    var bottom_shadow = game.add.sprite(322, 643, "vod_shadow_bottom");
    bottom_shadow.scale.setTo(0.5, 0.5);

    require("./input.js").initInput();
    
    var goUp = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var goDown = game.input.keyboard.addKey(Phaser.Keyboard.S);
    goUp.onDown.add(ScrollUp, this);
    goDown.onDown.add(ScrollDown, this);
}

exports.update = function () {
    vod_green.y = 147.5 - 37.5 * vod_green_mult;
    if (!scrolled) {
        vod_box.x = 359 + 220 * vod_box_mult;
        showText.x = 359 + 95 + 220 * vod_box_mult;
        showText.text = texts[vod_box_mult];
        showText.anchor.x = Math.round(showText.width * 0.5) / showText.width;
    }
    else {
        vod_box.x = 352 + 215 * vod_box_mult;
        showText.x = 352 + 17 + 220 * vod_box_mult;
        showText.text = "";
        showText.anchor.x = Math.round(showText.width * 0.5) / showText.width;
    }
}

function ScrollUp() {
    vod_box.y = 296;
    game.add.tween(contentgroup).to({ y: 0 }, 500, Phaser.Easing.Cubic.InOut, true);
    vod_box.loadTexture("vod_box");
    
    scrolled = false;
    vod_box_mult = 0;
}

function ScrollDown() {
    vod_box.y = 296 + 382;
    vod_box_mult = 0;
    game.add.tween(contentgroup).to({ y: -382 }, 500, Phaser.Easing.Cubic.InOut, true);
    vod_box.loadTexture("vod_box_item");
    
    
    scrolled = true;
}