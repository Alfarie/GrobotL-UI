import Home from './components/Home/Home.vue'
import Timer from './components/Timer/Timer.vue'
import TimerPanel from './components/Timer/TimerPanel/TimerPanel.vue'
import AddTimer from './components/Timer/ControlPanel/AddTimer.vue'
import Mode from './components/Timer/TimerPanel/Mode.vue'
import Setting from './components/Setting/Setting.vue'
import Activity from './components/Setting/Activity.vue'

import SetDateTime from './components/Setting/SetDateTime.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/home', name:"home", component: Home},
    {path: '/setting', name:"setting", component: Setting, children:[
        {path: '/datetime', component: SetDateTime},
        {path: '/activity', component: Activity},
    ]},
    {path: '/timer', component: Timer, children:[
        {path: ':id', component: TimerPanel},
        {path: ':id/add', component: AddTimer},
        {path: ':id/mode', component: Mode}
    ]},
    {path: '*', redirect: '/'}
]