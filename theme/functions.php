<?php
function register_scripts() {
    $main_js = get_template_directory_uri() . '/assets/js/index.js';
    $main_css = get_template_directory_uri() . '/assets/css/main.css';
    $roboto_font = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
    wp_register_script('main-js', $main_js, [], false, true);
    wp_register_style('main-css', $main_css, [], false);
    wp_register_style('roboto', $roboto_font, [], false);
    wp_enqueue_script('main-js');
    wp_enqueue_style('main-css');
    wp_enqueue_style('roboto');
}
add_action( 'wp_enqueue_scripts', 'register_scripts' );
?>
