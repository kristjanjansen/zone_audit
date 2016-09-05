import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import VueEvents from 'vue-events';

import Audit from './pages/Audit.vue'
import Components from './pages/Components.vue'
import Pod3 from './components/Pod3.vue'

Vue.use(VueResource)
Vue.use(VueEvents)

const routes = {
  '/': Audit,
  '/components': Components,
  '/pod3': Pod3
}

new Vue({
  el: '#app',
  render: h => h(routes[window.location.pathname])
})
