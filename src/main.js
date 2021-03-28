import Vue from 'vue';
import 'vue-use-vuex'; 
import App from './App';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { store } from './Vuex/Status/vuex';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
