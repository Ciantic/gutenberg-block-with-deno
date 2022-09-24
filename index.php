<?php

/**
 * Plugin Name: Counter example
 */

add_action('init', function () {
    $uri = get_template_directory_uri();
    $dir = __DIR__;

    wp_register_script(
        'mytheme-counter-edit',
        "$uri/src/counter-edit.js",
        array('wp-blocks', 'wp-element'),
        "1.0",
        true
    );

    wp_register_script(
        'mytheme-counter',
        "$uri/src/counter.js",
        array('react', 'react-dom'),
        "1.0",
        true
    );

    register_block_type(__DIR__, [
        'render_callback' => function ($block_attributes, $content) {
            return '<div class="wp-block-mytheme-counter" data-attrs="' . esc_attr(json_encode($block_attributes)) . '" data-content="' . esc_attr($content) . '">Loading...</div>';
        }
    ]);
});
