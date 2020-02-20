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
    accessToken: null,
    config : config,
    api_token : null,     //API 토큰
    email_token : null,   //이메일 검증용 토큰
  },

  getters: {
    getAccessToken: (state) => state.accessToken,
    getApiToken: (state) => state.api_token,
    getConfig: (state) => state.config,
    getEmailToken: (state) => state.email_token,
  },

  mutations: {

    SETAPIURI(state, { URI }) {
      console.log('setAPITUI : ' + URI);
      state.config.requestHost = URI
    },

    GetEmailConfirmToken(state, { data }){
      console.log('email token : ' + data.confirm_token);
      state.email_token = data.confirm_token
      localStorage.email_token = data.confirm_token;
    },

    GETAPITOKEN(state, { api_token }) {
      state.api_token = api_token

      //로컬스토리지에 저장
      localStorage.api_token = api_token
    },


    LOGIN(state, { accessToken }) {
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

    SETAPIURI({ commit }, { uri }){

      commit('SETAPIURI', uri)
      console.log('SETAPIURI data : ' + uri);
              
    },

    GETAPITOKEN({ commit }, { userEmail, pass }){
      let resourceHost = config.requestHost;

      console.log('userEmail : ' + userEmail, ', pass : ' + pass +" but currnet is only use fatosapi");
      
      return axios.post(`${resourceHost}/auth/getApiToken/`, {id:"fatosapi", pass:"tester"},`${myHeaders}`)
        .then(({ data }) => {

          commit('GETAPITOKEN', data)
          console.log('recieved API_TOKEN data : ' + data.api_token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.api_token}`;
        }
        ).catch(error=>{
          console.error("err: "+ error);
        })
    },


    GetEmailConfirmToken({ commit }, { userEmail, api_token }){
      let resourceHost = config.requestHost;

      console.log('getEmailConfirmToken : ' + userEmail, ', api_token : ' + api_token);
      
      return axios.post(`${resourceHost}/console/getEmailConfirmToken/`, {user_email:userEmail, api_token:api_token},`${myHeaders}`)
        .then(({ data }) => {

          console.log('recieved getEmailConfirmToken data : ' + data.confirm_token);
          commit('GetEmailConfirmToken', data)
          // axios.defaults.headers.common['Authorization'] = `Bearer ${data.api_token}`;
        }
        ).catch(error=>{
          console.error("err: "+ error);
        })
    },

    LOGIN({ commit }, {userEmail, password, apiToken }) {
      
      let resourceHost = config.requestHost;
      console.log('login  : ' + userEmail, ', password : ' + password + ", apiToken :" + apiToken);

      // userEmail = 'fatosapi'
      // password = 'tester'

      return axios.post(`${resourceHost}/auth/login`, {email:userEmail, pass:password, api_token:apiToken},`${myHeaders}`)
        .then(({ data }) => {
          
          // console.log('recieved login data : ' + data.accessToken);
          // axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
          commit('LOGIN', data)
          
        }
        ).catch(error=>{
          console.error(error);
        })
    },
    LOGOUT({ commit }) {
      console.log('logout![store]');
      commit('LOGOUT')
    },
  }
})