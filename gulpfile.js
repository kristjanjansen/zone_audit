var elixir = require('laravel-elixir')

require('laravel-elixir-vue')
require('./svg');

elixir(function(mix) {
    mix.webpack('./src/main.js', './public/js/')
    mix.svg('./src/svg', 'public/svg/');
})