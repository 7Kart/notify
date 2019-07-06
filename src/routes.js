import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Home from '@/pages/Home';
import NotifyPage from '@/pages/NotifyPage';
import NotFount from '@/pages/404';

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        }, {
            path: "/NotifyPage",
            name: "notifyPage",
            component: NotifyPage
        }, {
            path:"*",
            name:"Not found",
            component: NotFount
        }
    ]
})