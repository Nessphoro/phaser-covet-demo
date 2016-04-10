var cache = require("./data.js").cache;

var showIdToCovetIt = 
 {
    1:"TarG7hkX22m5mbLc9",
    //1: "wPcf4EPHeMKoGe6P2",
    2: "cfSEQrd3rnezY4CBh",
    3: "2Fka6jBDE27Hz2ssx"
};

var lookToDisplay = [];

exports.update = function () {
    vod_green.y = 147.5 - 37.5 * vod_green_mult;
    vod_box.x = 350 + 220 * vod_box_mult - 5;
}


exports.preload = function () {
    lookToDisplay.forEach(function (look) {
        game.load.image(look._id + "_cover", look.cover);
    });
}

exports.create = function ()
{
    vd = game.add.video("vod_video");
    vd.addToWorld(0, 0, 0, 0, 1.77778, 1.77778);
    //vd.play(true);
    
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    var vod_static = game.add.sprite(0, 0, 'vod_static');
    vod_static.scale.setTo(0.5, 0.5);
    
    var vod_side = game.add.sprite(0, 0, 'vod_side');
    vod_side.scale.setTo(0.5, 0.5);
    
    window.vod_green = game.add.sprite(65, 147.5 - 37.5 * 0, 'vod_green_text');
    vod_green.scale.setTo(0.5, 0.5);
    
    var text1 = game.add.text(75, 147.5 - 37.5 * 2 + 5, "Search", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text2 = game.add.text(75, 147.5 - 37.5 * 1 + 5, "My videos", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text3 = game.add.text(75, 147.5 - 37.5 * 0 + 5, "You might like", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text4 = game.add.text(75, 147.5 - 37.5 * -1 + 5, "TV On Demand", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text5 = game.add.text(75, 147.5 - 37.5 * -2 + 5, "Featured", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text6 = game.add.text(75, 147.5 - 37.5 * -3 + 5, "New releases", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text7 = game.add.text(75, 147.5 - 37.5 * -4 + 5, "Movies", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text8 = game.add.text(75, 147.5 - 37.5 * -5 + 5, "Staff picks", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text9 = game.add.text(75, 147.5 - 37.5 * -6 + 5, "Optik Local", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text10 = game.add.text(75, 147.5 - 37.5 * -7 + 5, "En francais", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text11 = game.add.text(75, 147.5 - 37.5 * -8 + 5, "Adult only", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text12 = game.add.text(75, 147.5 - 37.5 * -9 + 5, "Help centre", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    var text13 = game.add.text(75, 147.5 - 37.5 * -10 + 5, "Display style", { font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize: "25px" })
    
    window.vod_box = game.add.sprite(350 + 220 * 0 - 5, 200 - 5, "vod_box");
    vod_box.scale.setTo(0.5, 0.5);
    
    var counter = 0;
    window.topContainer = game.add.group();
    lookToDisplay.forEach(function (look) {
        var lookImage = topContainer.create(350 + 220 * (counter++), 200, look._id + "_cover");
        lookImage.width = 180;
        lookImage.height = 251.5;
    });
   

    require("./input.js").initInput();
}


exports.init = function(showId)
{
    console.log(showId);
    lookToDisplay = cache.looks.find({ mode: 1, rootId: showIdToCovetIt[showId] });
}
