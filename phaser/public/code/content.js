exports.preload = function () {
    game.load.video("vod_video", "video/mindy.mp4");
    
    game.load.image("vod_like", "assets/you-might-like-screen.png");
    game.load.image("vod_logo", "assets/logo.png");
    game.load.image("vod_overlay", "assets/overlay.png");
    game.load.image("vod_shadow_bottom", "assets/bottom-shadow.png");
    game.load.image("vod_shadow_top", "assets/top-shadow.png");
    
    game.load.image('vod_static', 'assets/vod_static.png');
    game.load.image("vod_show_static", "assets/vod_show_static.png");
    game.load.image("vod_look_static", "assets/vod_look_static.png");
    

    game.load.image('vod_side', 'assets/vod_side.png');
    game.load.image('vod_green_text', 'assets/vod_green_text.png');
    game.load.image('vod_box', 'assets/vod_box.png');
    game.load.image('vod_box_big', 'assets/vod_main_look.png');
    game.load.image('vod_box_item', 'assets/vod_item_box.png');
    game.load.image("vod_box_med", "assets/vod_selection_look.png");
    
    game.load.image("vod_modal_mindy", "assets/item-modal-mindy.png");
    
    game.load.image("vod_button_green", "assets/buy-button-green.png");
    game.load.image("vod_button_grey", "assets/buy-button-grey.png");
    
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
    
    game.state.start("vod_like");
};