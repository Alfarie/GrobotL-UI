const state = {
    actuator: {
        fan: {
            mode: 0,
            status: 0
        },
        pump: {
            mode: 0,
            status: 0
        },
        led: {
            mode: 0,
            status: 0
        },
    }
}


const getters = {
    fanStatus: state=>{
        let data = {
            mode: (this.state.actuator.fan.mode == 0)? 'MANUAL' : 'AUTO',
            status: (this.state.actuator.fan.status == 0)? 'OFF' : 'ON'
        }
        return data;
    },
    pumpStatus: state=>{
        let data = {
            mode: (this.state.actuator.pump.mode == 0)? 'MANUAL' : 'AUTO',
            status: (this.state.actuator.pump.status == 0)? 'OFF' : 'ON'
        }
        return data;
    },
    ledStatus: state=>{
        let data = {
            mode: (this.state.actuator.led.mode == 0)? 'MANUAL' : 'AUTO',
            status: (this.state.actuator.led.status == 0)? 'OFF' : 'ON'
        }
        return data;
    }
}

export default {
    state,
    getters
}