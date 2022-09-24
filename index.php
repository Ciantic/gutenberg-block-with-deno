<?php

/**
 * Plugin Name: Counter example
 */

add_action('init', function () {
    register_block_type(__DIR__, [
        'render_callback' => function ($block_attributes, $content) {
            return '<div class="block-counter" data-attrs="' . esc_attr(json_encode($block_attributes)) . '" data-content="' . esc_attr($content) . '">Loading...</div>';
        }
    ]);
});
