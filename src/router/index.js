import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import TabRecommend from '../views/TabRecommend'
const routes = [
  {
    path:'/',component:TabRecommend
  },
  {
    path:'/TabHot',component:()=>import('../views/TabHot')
  },
  {
    path:'/TabSearch',component:()=>import('../views/TabSearch')
  },
  {
    path:'/singList/:id',name:'singList',component:()=>import('../views/singList')
  }
]

const router = new VueRouter({
  routes
})

export default router
