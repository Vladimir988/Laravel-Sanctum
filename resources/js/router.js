import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/get',
            name: 'get.index',
            component: () => import('./components/Get')
        },
        {
            path: '/user/login',
            name: 'user.login',
            component: () => import('./components/Login')
        },
        {
            path: '/user/registration',
            name: 'user.registration',
            component: () => import('./components/Registration')
        }
    ]
});
