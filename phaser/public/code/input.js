exports.initInput = function()
{
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    downKey.onDown.add(goDown, this);
    
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upKey.onDown.add(goUp, this);
    
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
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
    switch (vod_green_mult) {
        case 0:
            game.state.start("vod_like")
            break;
        case -1:
            game.state.start("vod_main", true, false);
            break;
    }
}

function goUp() {
    vod_green_mult++;
    switch (vod_green_mult) {
        case 0:
            game.state.start("vod_like")
            break;
        case -1:
            game.state.start("vod_main", true, false);
            break;
    }
}

function goRight() {
    if (game.state.current == "vod_main" || game.state.current == "vod_show" || game.state.current == "vod_look") {
        vod_box_mult++;
        if (vod_box_mult > 3)
            vod_box_mult = 3;

    }
}

function goLeft() {
    if (game.state.current == "vod_main" || game.state.current == "vod_show" || game.state.current == "vod_look") {
        vod_box_mult--;
        if (vod_box_mult < 0)
            vod_box_mult = 0;
    }
}

function openShow() {
    if (game.state.current == "vod_main")
        game.state.start("vod_show", true, false, vod_box_mult);
    else if (game.state.current == "vod_show")
        game.state.start("vod_look", true, false, vod_box_mult);
    else if (game.state.current == "vod_look")
        game.state.start("vod_items", false, false, 0);
}

function goBack()
{
    if (game.state.current == "vod_show")
        game.state.start("vod_main");
    if (game.state.current == "vod_look")
        game.state.start("vod_show");
    if (game.state.current == "vod_items")
        game.state.start("vod_look");
}