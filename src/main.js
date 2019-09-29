import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: Home },
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
