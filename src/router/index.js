import { createRouter, createWebHashHistory } from 'vue-router'
import authPage from '../pages/auth-page.vue';
import usersListPage from '../pages/users-list-page.vue';
import userInfoPage from '../pages/user-info-page.vue';


const routes = [
    {
        path: '/',
        name: 'auth',
        component: authPage
    },
    {
        path: '/users-list',
        name: 'users-list',
        component: usersListPage
    },
    {
        path: '/user-info',
        name: 'user-info',
        component: userInfoPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router