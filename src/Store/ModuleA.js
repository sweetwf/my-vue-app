const moduleA = {
  state: {
    count: 0,
    
  },
  getters: {
    doubleCount(state) { 
      return state.count * 2
    }
  },
  actions: {
    increment({ state, commit }) { 
      if (state.count) { 
        commit('increment')
      }
    }
  },
  mutations: {
    increment(state) { 
      state.count ++
    }
  }
}

export default moduleA;