var bmd = null;

exports.create = function () {
    
    

    vd = game.add.video("vod_video");
    vd.addToWorld(0, 0, 0, 0, 1.77778, 1.77778);
    vd.play(true);
    vd.mute = true;
    
    bmd = game.add.bitmapData(1280, 720);
    bmd.addToWorld(0, 0, 0, 0, 1, 1);
    
    
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    downKey.onDown.add(goDown, this);
    
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upKey.onDown.add(goUp, this);
    
    var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spacebar.onDown.add(pause, this);
    
}

function goDown()
{

}

function goUp()
{

}


function pause()
{
    vd.paused = !vd.paused;
    if (vd.paused) {
        
    }
    else {
    }
}
