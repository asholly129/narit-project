import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import RegisterPage from '@/components/RegisterPage'
import LoginPage from '@/components/LoginPage'
import AboutPage from '@/components/About'
import ApplicationPage from '@/components/Application'
import AddContentPage from '@/components/AddContent'
import ContentPage from '@/components/Content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/application',
      name: 'ApplicationPage',
      component: ApplicationPage
    },
    {
      path: '/add',
      name: 'AddContentPage',
      component: AddContentPage
    },
    {
      path: '/content/:id',
      name: 'ContentPage',
      component: ContentPage
    },
  ]
})