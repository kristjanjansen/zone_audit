var elixir = require('laravel-elixir')

require('laravel-elixir-vue')

elixir(function(mix) {
    mix.webpack('./src/main.js', './public/js')
})