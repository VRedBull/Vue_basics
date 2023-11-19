import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Employees from './views/Employees.vue'
import Employee from './views/Employee.vue'

import {createPinia} from 'pinia'

const routes = [
    {path:'/',name:'Home',component:Home},
    {path:'/about',name:'About',component:About},
    {path:'/contact',name:'Contact',component:Contact},
    {path:'/employees',name:'Employees',component:()=>import('./views/Employees.vue')},
    {
        path:'/employee/:id/',
        name:'Employee',
        props:true,
        component:Employee}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const store = createPinia()

createApp(App).use(router).use(store).mount('#app')


