import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Merchants from '../views/Merchants.vue'
import Info from '../views/Info.vue'

const routes = [
	{
      path: '/',
		name: 'home',
		component: Home
	},
	{
	   path: '/merchants',
	   name: 'merchants',
	   component: Merchants
	},
	{
	   path: '/info',
	   name: 'info',
	   component: Info
	}
]
//createRouter
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

export default router