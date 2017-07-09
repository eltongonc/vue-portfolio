import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Work from '../components/Work'
import Home from '../components/Home'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
	mode: "history",
	history: true,
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/work',
			name: 'Work',
			component: Work
		},
		{
			path: '/work/:slug',
			name: 'DetailPage',
			component: Detail,
			props:true
		}
	]
})
