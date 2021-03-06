let mix = require('laravel-mix');
mezclar.pug = require( ' laravel-mix-pug ' );  

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

  
mix.setPublicPath('dist');
mix.pug = require('laravel-mix-blade-pug');

/**
 * Blade Views
 */
mix.pug('src/views', 'public/views');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .pug('src/*.pug','dist');
