exports.preload = function () {
    game.load.video("vod_video", "video/mindy.mp4");
    
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
};

exports.create = function () {
    game.state.start("vod_main");
};