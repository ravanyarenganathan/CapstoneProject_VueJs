
import Vuex from 'vuex';
export default new Vuex.Store({
  state: {
    count: 0,
    clickData: [],
    
  },
  mutations: {
    increment(state,data) {
      state.count++;
      state.clickData.push(data);
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment(context,data) {
      context.commit('increment',data);
    },
    decrement(context) {
      context.commit('decrement');
    }
  },
  getters: {
    getCount: state => {
      return state.count;
    },
    getClickData: state => {
      return state.clickData;
    }
  }
});
