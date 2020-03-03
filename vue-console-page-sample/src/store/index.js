import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '@/config'

Vue.use(Vuex)

// const resourceHost = 'http://betamaps.fatos.biz'
// let resourceHost = 'http://localhost:3000'

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export default new Vuex.Store({

  state: {
    config: config,
    api_token: null,     //API 토큰
    app_token: null,    //app 토큰(유효시간 10분)
    ref_token: null,    //app_token 리프레시 용도(1일)
    key_token: null,    //API KEY 토큰
  },

  getters: {
    getApiToken: (state) => state.api_token,
    getConfig: (state) => state.config,
    getKeyToken : (state) => state.key_token,
    getAppToken: (state) => state.app_token,
    getRefToken: (state) => state.ref_token,
  },

  mutations: {

    SETAPIURI(state, { URI }) {
      // console.log('setAPITUI : ' + URI);
      state.config.requestHost = URI
    },

    GetEmailConfirmToken(state, { data }) {
      // console.log('email token : ' + data.confirm_token);
      state.email_token = data.confirm_token;
      sessionStorage.email_token = data.confirm_token;
    },


    UpdateAppToken(state, { data, resolve }) {
      // console.log('updateAppToken : ' , data );
      if (data.app_token) {
        resolve(true);
        state.app_token = data.app_token;
        // sessionStorage.app_token = data.app_token;
      }

    },

    GETAPITOKEN(state, { api_token }) {
      // console.log('GETAPITOKEN[mutation] ', api_token);
      state.api_token = api_token
      //로컬스토리지에 저장
      // localStorage.api_token = api_token
    },

    GETKEYTOKEN(state, { key_token }) {
      // console.log('GETKEYTOKEN[mutations] ', key_token);
      state.key_token = key_token
    },

    LOGIN(state, { appToken, refToken }) {
      // console.log('mutation login', appToken, ", ", refToken);
      state.app_token = appToken
      state.ref_token = refToken

      //로컬스토리지에 저장
      // sessionStorage.app_token = appToken
      sessionStorage.ref_token = refToken
      sessionStorage.setItem('saved', new Date().getTime())
    },

    LOGOUT(state) {
      // 토큰 정보 삭제
      state.app_token = null
      state.ref_token = null
      state.config = null
      state.api_token = null

      sessionStorage.clear()
      // delete sessionStorage.app_token
      // delete sessionStorage.ref_token

    },
  },
  actions: {

    SETAPIURI({ commit }, { uri }) {

      commit('SETAPIURI', uri)
      // console.log('SETAPIURI data : ' + uri);

    },


    refreshAppToken({ commit }, { refToken, resolve }) {
      let resourceHost = config.requestHost;

      if (refToken) {
        axios.post(`${resourceHost}/auth/refreshAppToken/`, { ref_token: refToken }, `${myHeaders}`)
          .then(({ data }) => {
            commit('UpdateAppToken', {data : data, resolve:resolve})
            // console.log('getToken success[actions]');
            
          }
          ).catch(error => {
            console.error("err: " + error);
          })
      }
    },

    GETAPITOKEN({ commit } ) {
      let resourceHost = config.requestHost;
      
      return axios.post(`${resourceHost}/auth/getApiToken/`, { id: "fatosapi", pass: "tester" }, `${myHeaders}`)
        .then(({ data }) => {

          commit('GETAPITOKEN', data)
          // console.log('recieved API_TOKEN data : ' + data.api_token);
          // axios.defaults.headers.common['Authorization'] = `Bearer ${data.api_token}`;
        }
        ).catch(error => {
          console.error("err: " + error);
        })
    },

    

    GETKEYTOKEN({ commit } ,{key_token}) {
      // console.log('GETKEYTOKEN[actions] ', key_token);
      commit('GETKEYTOKEN', { key_token : key_token})
    },


    GetEmailConfirmToken({ commit }, { userEmail, api_token }) {
      let resourceHost = config.requestHost;

      // console.log('getEmailConfirmToken : ' + userEmail, ', api_token : ' + api_token);

      return axios.post(`${resourceHost}/console/getEmailConfirmToken/`, { user_email: userEmail, api_token: api_token }, `${myHeaders}`)
        .then(({ data }) => {

          // console.log('recieved getEmailConfirmToken data : ' + data.confirm_token);
          commit('GetEmailConfirmToken', data)
          // axios.defaults.headers.common['Authorization'] = `Bearer ${data.api_token}`;
        }
        ).catch(error => {
          console.error("err: " + error);
        })
    },

    //로그인 후에 토큰정보 저장
    LOGIN({ commit }, { appToken, refToken }) {
      commit('LOGIN', { appToken: appToken, refToken: refToken })
    },

    LOGOUT({ commit }) {
      commit('LOGOUT')
    },
  }
})