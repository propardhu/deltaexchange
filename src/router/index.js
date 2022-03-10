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

const avoidPath = ['login','signup'];

router.beforeEach(function(to, from, next) {
    var is_authenticated = false;
    if(window.localStorage.getItem('token') == "admin"){
        is_authenticated = true;
    }
    if(avoidPath.indexOf(to.name) != -1){
        return next();
    }
    if(is_authenticated){
        return next();
    }
    next({'name':'login'});

});
export default router;
