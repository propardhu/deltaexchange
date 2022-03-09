import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: import('@/views/LoginView.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        component: import('@/views/SignupView.vue')
    }
   
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// const avoidPath = ['login','signup'];

// router.beforeEach(function(to, from, next) {
    // const is_authenticated = globalVariables.userAuth || false;
    // if(avoidPath.indexOf(to.name as string) != -1){
    //     return next();
    // }
    // if(is_authenticated){
    //     return next();
    // }
    // next({'name':'login', query: {redirect: to.path}});

// });
export default router;
