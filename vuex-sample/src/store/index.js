import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '@/config'

Vue.use(Vuex)

// const resourceHost = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {
    getAccessToken: (state) => state.accessToken
  },
  mutations: {

    LOGIN(state, { accessToken }) {
      console.log("login[mutations]")
      state.accessToken = accessToken

      //로컬스토리지에 저장
      localStorage.accessToken = accessToken
      
    },

    LOGOUT(state) {
      // 토큰 정보 삭제
      state.accessToken = null
      delete localStorage.accessToken
    },
  },
  actions: {
    LOGIN({ commit }, { email, password }) {
      let resourceHost = config.requestHost;
      console.log('login to : ' + config.requestHost);
      console.log("Login[Store] email : " + email + ", password : " + password);
      return axios.post(`${resourceHost}/auth/login`, { email, password })
        .then(({ data }) => {

          commit('LOGIN', data)
          console.log('recieved login data : ' + data.accessToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        }
        )
    },
    LOGOUT({ commit }) {
      console.log('logout![store]');
      commit('LOGOUT')
    },
  }
})