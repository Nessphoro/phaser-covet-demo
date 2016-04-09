var game = new Phaser.Game(1280, 720, Phaser.AUTO, "", {preload: preload, create: create, update: update});
var vod_green;
var vod_green_mult = 0;

var vod_box;
var vod_box_mult = 0;

function preload()
{
    game.load.video("vod_video", "video/gg.mp4");

    game.load.image('vod_static', 'assets/vod_static.png');
    game.load.image('vod_side', 'assets/vod_side.png');
    game.load.image('vod_green_text', 'assets/vod_green_text.png');
    game.load.image('vod_box', 'assets/vod_box.png');

    game.load.image('vod_shows_2broke', 'assets/shows/vod_2broke.png');
    game.load.image('vod_shows_aos', 'assets/shows/vod_aos.png');
    game.load.image('vod_shows_hoc', 'assets/shows/vod_hoc.png');
    game.load.image('vod_shows_jane', 'assets/shows/vod_jane.png');
    game.load.image('vod_shows_madmen', 'assets/shows/vod_madmen.png');
    game.load.image('vod_shows_mindy', 'assets/shows/vod_mindy.png');
    game.load.image('vod_shows_pll', 'assets/shows/vod_pll.png');
    game.load.image('vod_shows_suits', 'assets/shows/vod_suits.png');
    game.load.image('vod_shows_13', 'assets/shows/vod_view_13.png');
    game.load.image('vod_shows_15', 'assets/shows/vod_view_15.png');
}

function create()
{
    var vd = game.add.video("vod_video");
    vd.addToWorld(0, 0, 0,0, 0.66667, 0.66667);
    vd.play(true);

    var vod_static = game.add.sprite(0, 0, 'vod_static');
    vod_static.scale.setTo(0.5, 0.5);

    var vod_side = game.add.sprite(0, 0, 'vod_side');
    vod_side.scale.setTo(0.5, 0.5);
    
    vod_green = game.add.sprite(65, 147.5 - 37.5 * 0, 'vod_green_text');
    vod_green.scale.setTo(0.5, 0.5);

    var text1 = game.add.text(75, 147.5 - 37.5 * 2 + 5, "Search", {font: 'normal normal normal "Avenir LT Std"', fill: "#DCDCDC", fontSize:"25px"})
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
    
    vod_box = game.add.sprite(350 + 220 * 0 -5, 200 - 5, "vod_box");
    vod_box.scale.setTo(0.5, 0.5);

    var vod_view_15 = game.add.sprite(350, 200, "vod_shows_15");
    vod_view_15.scale.setTo(0.5, 0.5);
    
    var vod_madmen = game.add.sprite(350 + 220 * 1, 200, "vod_shows_madmen");
    vod_madmen.scale.setTo(0.5, 0.5);
    
    var vod_hoc = game.add.sprite(350 + 220 * 2, 200, "vod_shows_hoc");
    vod_hoc.scale.setTo(0.5, 0.5);
    
    var vod_suits = game.add.sprite(350 + 220 * 3, 200, "vod_shows_suits");
    vod_suits.scale.setTo(0.5, 0.5);
    
    var vod_aos = game.add.sprite(350 + 220 * 4, 200, "vod_shows_aos");
    vod_aos.scale.setTo(0.5, 0.5);
    
    

    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    downKey.onDown.add(goDown, this);

    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    upKey.onDown.add(goUp, this);

    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey.onDown.add(goRight, this);
    leftKey.onDown.add(goLeft, this);
}


function update()
{

}


function goDown()
{
    vod_green_mult--;
    vod_green.y = 147.5 - 37.5 * vod_green_mult;
}

function goUp()
{
    vod_green_mult++;
    vod_green.y = 147.5 - 37.5 * vod_green_mult;
}

function goRight()
{
    vod_box_mult++;
    vod_box.x = 350 + 220 * vod_box_mult - 5;
}

function goLeft() {
    vod_box_mult--;
    vod_box.x = 350 + 220 * vod_box_mult -5 ;
}