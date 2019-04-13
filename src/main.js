import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Portfolio from './components/Portfolio'
import PortfolioItem from './components/PortfolioItem'
import Timeline from './components/Timeline'
import Interactive from './pages/Interactive'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
  { path: '/interactive', component: Interactive },
  { path: '/portfolio', component: Portfolio },
  { path: '/portfolio/:item', component: PortfolioItem },
  { path: '/timeline', component: Timeline }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
