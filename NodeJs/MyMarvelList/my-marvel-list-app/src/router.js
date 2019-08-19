import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Content from './views/Content.vue'
import Category from './views/Category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/content/:category/:id',
      name: 'content',
      component: Content
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/category/:category/:limit/:offset',
      name: 'category',
      component: Category
    }
  ]
})
