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
    }
  }
}


const getters = {
  fanStatus: state => {
    let data = {
      mode: (state.actuator.fan.mode == 0) ? 'MANUAL' : 'AUTO',
      status: (state.actuator.fan.status == 0) ? 'OFF' : 'ON'
    }
    return data;
  },
  pumpStatus: state => {
    let data = {
      mode: (state.actuator.pump.mode == 0) ? 'MANUAL' : 'AUTO',
      status: (state.actuator.pump.status == 0) ? 'OFF' : 'ON'
    }
    return data;
  },
  ledStatus: state => {
    let data = {
      mode: (state.actuator.led.mode == 0) ? 'MANUAL' : 'AUTO',
      status: (state.actuator.led.status == 0) ? 'OFF' : 'ON'
    }
    return data;
  },
  actuator: state=>{
    return state.actuator;
  }
}

const mutations = {
  updateActuator: (state, payload) => {
    state.actuator = payload;
  }
}

const actions = {
    updateActuator: ({commit} , payload)=>{
        
        commit('updateActuator',payload);
    }
}

export default {
  state,
  getters,
  mutations,
  actions
}
