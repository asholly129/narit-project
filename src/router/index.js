import Vue from 'vue'
import Router from 'vue-router'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(Router)

import IndexPage from '@/components/IndexPage'

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'IndexPage',
			component: IndexPage
		}
	]
})


export default router
