import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Layout = import('./../layout/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    meta: {
      title: '首页',
      icon: 'home'
    },
    component: Layout,
    
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})