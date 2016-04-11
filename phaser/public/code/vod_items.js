var buybutton = null;
var buytext = null;

exports.create = function ()
{
    
    var modalGroup = game.add.group();
    var overlay = game.add.sprite(0, 0, "vod_overlay", null, modalGroup);
    overlay.scale.setTo(0.5, 0.5);

    var modal = game.add.sprite(1280 / 2, 720 / 2, "vod_modal_mindy", null, modalGroup);
    modal.scale.setTo(0.5, 0.5);
    modal.anchor.setTo(0.5, 0.5);
    
    
    buybutton = game.add.sprite(650, 460, "vod_button_grey", null, modalGroup);
    buybutton.scale.setTo(0.5, 0.5);
    
    buytext = game.add.text(820, 475, "Buy Now", { font: 'normal normal normal "Avenir Next"', fill: "#DCDCDC", fontSize: "25px" }, modalGroup);
    

    modalGroup.alpha = 0;
    
    

    game.add.tween(modalGroup).to({ alpha: 1 }, 500, Phaser.Easing.Cubic.InOut, true);
    
    

    require("./input.js").initInput();
    
    var buy = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    buy.onDown.add(Buy, this);
}

exports.update = function()
{

    buytext.anchor.x = Math.round(buytext.width * 0.5) / buytext.width;
}


function Buy() {
    buytext.text = "Processing...";
    setTimeout(function () {
        buybutton.loadTexture("vod_button_green");
        buytext.text = "OK";
    }, 1000);
    
}