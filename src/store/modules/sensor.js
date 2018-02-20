const state = {
    sensor:{
        temperature: 0,
        humidity: 0
    }
}

const getters = {
    sensor: state=>{
        return {
            temperature: Math.abs(state.sensor.temperature).toFixed(1),
            humidity: Math.abs(state.sensor.humidity).toFixed(1)
        };
    }
}

const mutations = {
    updateSensor: (state, payload)=>{
        // console.log(payload);
        state.sensor = payload;
    }
}

const actions = {
    updateSensor: ({commit} , payload)=>{
        commit('updateSensor',payload)
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}