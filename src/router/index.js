import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Merchants from '../views/Merchants.vue'
import Info from '../views/Info.vue'
import ContactUs from '../views/ContactUs.vue'

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
	},
	{
	   path: '/contact-us',
	   name: 'contactUs',
	   component: ContactUs
	}
]
//createRouter
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

export default router