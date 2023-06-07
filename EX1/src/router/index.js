import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import store from '../store'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      beforeEnter:((to,from,next)=>{
        if(store.state.isAuthentication){
          return next({
            name:'home'
          })
        }
        next()
      })
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      beforeEnter:((to,from,next)=>{
        if(store.state.isAuthentication){
          return next({
            name:'home'
          })
        }
        next()
      })
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      beforeEnter:((to,from,next)=>{
        if(!store.state.isAuthentication){
          return next({
            name:'login'
          })
        }
        next()
      })
    },
    { path: "/:pathMatch(.*)*", component: PageNotFoundView }
  ]
})

export default router
