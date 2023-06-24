import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
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
        },
        {
            path: '/user/personal',
            name: 'user.personal',
            component: () => import('./components/Personal')
        }
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token');

    if(! token) {
        if(to.name === 'user.login' || to.name === 'user.registration') {
            return next();
        } else {
            return next({
                name: 'user.login'
            });
        }
    }

    if(to.name === 'user.login' || to.name === 'user.registration' && token) {
        return next({
            name: 'user.personal'
        });
    }

    next();
});

export default router;
