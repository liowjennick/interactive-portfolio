import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import PortfolioItem from './components/PortfolioItem'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Interactive from './pages/Interactive'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Introduction },
  { path: '/interactive', component: Interactive },
  { path: '/portfolio', component: Portfolio },
  { path: '/portfolio/:item', component: PortfolioItem },
  { path: '/timeline', component: Timeline },
  { path: '/skills', component: Skills }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
