import Home from './components/Home/Home.vue'
import Timer from './components/Timer/Timer.vue'
import TimerPanel from './components/Timer/TimerPanel/TimerPanel.vue'
import AddTimer from './components/Timer/ControlPanel/AddTimer.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/home', name:"home", component: Home},
    {path: '/timer', component: Timer, children:[
        {path: ':id', component: TimerPanel},
        {path: ':id/add', component: AddTimer}
    ]},
    {path: '*', redirect: '/'}
]