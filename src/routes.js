import Home from './components/Home/Home.vue'
import Timer from './components/Timer/Timer.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/timer', component: Timer},
    {path: '*', redirect: '/'},
]