import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_USER_DATA = 'SET_USER_DATA'
export const SHOWSHAREBOX = 'SHOWSHAREBOX'
let modules = {}
let requireContext = require.context('./', false, /\.store.js$/)
requireContext.keys().forEach(path => {
    let apiObject = requireContext(path).default
    let key = path.match(/\.\/(\w+).store/)[1]
    modules[key] = apiObject
});

export default new Vuex.Store({
    state:{
        token:JSON.parse(sessionStorage.getItem('token')) || '',
        Sharebox: false,       //shareBox组件是否显示
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
          },
         //shareBox分享框是否展示
        [SHOWSHAREBOX](state, sign) {
            state.Sharebox = sign;
        },
    },
    actions:{
        setToken({commit}, token) {
            sessionStorage.setItem("token",JSON.stringify(token));
          commit('setToken', token);
        },
    },
    getters:{
        token: state => state.token,
       Sharebox: state => state.Sharebox
    },
    modules
})