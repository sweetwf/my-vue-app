import Vuex from 'vuex';
import Vue from 'vue';
import ModuleA from './ModuleA'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    obj: {
      message: "这是一条信息",
      msg:'v-model的信息'
    }
  },
  getters: {
    getObj: state => { 
      return state.obj
    }
  },
  mutations: {
    increment(state) { 
      state.count++;
    },
    changeMessage(state,payload) { 
      state.obj.message = payload
    },
    updateMsg(state,payload) { 
      state.obj.msg = payload
    }
  },
  actions: {
    changeMessage({ commit }, payload) { 
      commit('changeMessage',payload)
    }
  },
  modules: {
    ModuleA,
  },
  // 非线上环境采用严格模式
  strict:process.env.NODE_ENV !== 'production' 
})

export default store;
