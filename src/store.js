import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accesstoken:window.localStorage.token || '',
    isLogin: false,
    userInfo:{
      loginname:'',
      id:'',
      avatar_url:''
    }
  },
  mutations: {
    logout(state){
      window.localStorage.removeItem('token')
      state.accesstoken = ''
      state.isLogin = false
    },
    updateLogin(state,data){
      if(data.accesstoken){
        window.localStorage.token = state.accesstoken = data.accesstoken
        state.userInfo = data.userInfo
      }else{
        state.userInfo = data
      }
      state.isLogin = true
    }
    
  },
  actions: {
    login(context,data){
      context.commit('updateLogin',data)
    },
    checkLogin(context){
      if(context.state.accesstoken){
        return axios.post('https://cnodejs.org/api/v1/accesstoken',{
            accesstoken:context.state.accesstoken
        }).then(res=>{
          context.dispatch('login',res.data)
          // console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
      }
    }
  }
})
