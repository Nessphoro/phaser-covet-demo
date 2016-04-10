exports.initInput = function()
{
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    downKey.onDown.add(goDown, this);
    
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upKey.onDown.add(goUp, this);
    
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey.onDown.add(goRight, this);
    leftKey.onDown.add(goLeft, this);
    
    var fKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
    fKey.onDown.add(fullscreen, this);
    
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.add(openShow, this);

    var gb = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    gb.onDown.add(goBack, this);
}


function fullscreen() {
    game.scale.startFullScreen(false);
}

function goDown() {
    vod_green_mult--;
}

function goUp() {
    vod_green_mult++;
}

function goRight() {
    if (game.state.current == "vod_main" || game.state.current == "vod_show") {
        vod_box_mult++;
    }
}

function goLeft() {
    if (game.state.current == "vod_main" || game.state.current == "vod_show") {
        vod_box_mult--;
    }
}

function openShow() {
    if(game.state.current == "vod_main")
        game.state.start("vod_show", true, false, vod_box_mult);
    else if (game.state.current == "vod_show")
        game.state.start("vod_look", true, false, vod_box_mult);
}

function goBack()
{
    if (game.state.current == "vod_show")
        game.state.start("vod_main");
}