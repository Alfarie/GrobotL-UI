const state = {
    sensor:{
        temperature: 0,
        humidity: 0
    }
}

const getters = {
    temperature: state=>{
        return state.sensor.temperature
    },
    humidity: state =>{
        return state.sensor.humidity
    }
}

export default{
    state,
    getters
}