const state = {
    date: '',
    time: ''
}

const getters = {
    getDate: state=>{
        return state.date
    },
    getTime: state=>{
        return state.time
    }
}

const mutations = {
    setDate(state,payload){
        state.date = payload
    },
    setTime(state,payload){
        state.time = payload
    }
}

export default {
    state,
    getters,
    mutations
}