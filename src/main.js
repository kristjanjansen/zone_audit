import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import VueEvents from 'vue-events';

import Audit from './pages/Audit.vue'
import Dashboard from './pages/Dashboard.vue'

Vue.use(VueResource)
Vue.use(VueEvents)

const routes = {
  '/': Audit,
  '/dashboard': Dashboard
}

new Vue({
  el: '#app',
  render: h => h(routes[window.location.pathname])
})
