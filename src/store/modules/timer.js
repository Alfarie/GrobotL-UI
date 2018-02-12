import timerlist from '../../components/Timer/TimerPanel/timerlist.js'
const state = {
    timerList: []
}

const getters = {
    timerList: state => {
        return state.timerList;
    }
}

const mutations = {
    updateList: (state, payload) => {
        state.timerList = payload;
    },
    addList: (state, payload)=> {
        console.log(payload);
        state.timerList[payload.type].push(payload.data);
    },
    deleteIndexList: (state,payload)=>{
        state.timerList.splice(payload, 1);
    }
}

const actions = {
    initList: ( {commit}, payload )=> {
        console.log(timerlist);
        payload = timerlist;
        commit('updateList', payload);
    },
    updateList: ( {commit}, payload) => {
        commit('updateList', payload);
    },
    addList: ( {commit}, payload) =>{
        commit('addList', payload);
    },
    deleteIndexList: ( {commit}, payload)=>{
        commit('deleteIndexList', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}