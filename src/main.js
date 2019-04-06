import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Interactive from './pages/Interactive'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld},
  { path: '/interactive', component: Interactive }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
