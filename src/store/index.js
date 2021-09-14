import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token'),
    },
    mutations: {
        LOGIN: (state, data) => {
            //更改token的值
            state.token = data;
            localStorage.setItem('token', data);
        },
        LOGOUT: (state) => {
            //登出的时候要清除token
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    actions: {
        UserLogin({ commit }, data) {
            commit('LOGIN', data);
        },
        UserLogout({ commit }) {
            commit('LOGOUT');
        },
    },
    modules: {}
})