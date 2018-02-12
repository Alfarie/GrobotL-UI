import Vue from 'vue'
import Vuex from 'vuex'
import actuator from './modules/actuator.js'
import sensor from './modules/sensor.js'
import timer from './modules/timer.js'

Vue.use(Vuex);


export const store = new Vuex.Store({
    modules: {
        actuator,
        sensor,
        timer
    }
})


