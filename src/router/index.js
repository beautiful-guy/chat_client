import Vue from 'vue'
import Router from 'vue-router'
const components = {
  HomePage:()=>import('@/views/home_page')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: components.HomePage
    }
  ]
})
