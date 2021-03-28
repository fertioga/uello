import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

Vue.use('Vuex');

const store = new Vuex.Store({
  
    state:{
      status:{}
    },

    mutations:{
      setStatus: (state,obj) => state.status = obj
    },

    getters: {
      status: state => state.status
    },

    actions: {
      getStatusApi: ({ commit }) => {
         
        setInterval(function(){ 
           
          axios.get("https://hub.dummyapis.com/vj/mmqGLU6").then((response) => {
          
          let dados =  response.data[0];
          dados.endereco = dados.endereco.substring(1, 60);
          //console.log(dados);
         
          commit('setStatus',dados);
          
        });
      
       }, 6000);
      }
    }
  });

  export { store };