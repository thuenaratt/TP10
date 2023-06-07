import { createStore } from 'vuex'
// import 'dotenv/config';
// Create a new store instance.
export default createStore({
  state : { 
    apiUrl:"http://localhost:8000",
    isAuthentication:localStorage.getItem('token') ? true:false,
  },
  mutations: {
    login(state){
      state.isAuthentication=true
    },
    logout(state){
      state.isAuthentication=false
    }
  },
  actions:{
    
  }
})



