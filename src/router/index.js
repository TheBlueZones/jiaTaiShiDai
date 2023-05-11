// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/index.vue'
import SocialResponsibility from '../view/SocialResponsibility.vue'
import MarketPositioning from '../view/MarketPositioning.vue'
import UserFeedback from '../view/UserFeedback.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/social-responsibility',
        name: 'SocialResponsibility',
        component: SocialResponsibility,
    },
    {
        path: '/market-positioning',
        name: 'MarketPositioning',
        component: MarketPositioning,
    },
    {
        path: '/user-feedback',
        name: 'UserFeedback',
        component: UserFeedback,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
