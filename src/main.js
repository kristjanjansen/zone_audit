import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import VueEvents from 'vue-events';

import MainContent from './components/MainContent/MainContent.vue'
import MainMenu from './components/MainMenu/MainMenu.vue'
import Progressbar from './components/Progressbar/Progressbar.vue'

Vue.use(VueResource)
Vue.use(VueEvents)

new Vue({
    el: '#app',

    components: {
        MainMenu,
        Progressbar,
        MainContent,
    },

})
