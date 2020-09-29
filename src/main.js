import Vue from 'vue'
import App from './App.vue'
import Home from './components/HomeTemp'
import VueRouter from 'vue-router'
import Events from './components/Events'

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: Home },
    { path: '/events', component: Events },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
