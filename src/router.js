import Home from './components/Home/Home.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '*', redirect: '/'},
]