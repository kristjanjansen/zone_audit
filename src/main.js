import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import VueEvents from 'vue-events';

import App from './components/App.vue'

Vue.use(VueResource)
Vue.use(VueEvents)

new Vue({
  el: '#app',
  render: h => h(App)
})
