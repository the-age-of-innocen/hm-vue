import Vue from 'vue';
import App from './App.vue';

import './styles/base.less';
import './styles/iconfont.less';
import 'lib-flexible';
import router from './router';

import axios from 'axios';
// 优化axios路由
Vue.prototype.$axios = axios;
// 优化axios地址
axios.defaults.baseURL = 'http://localhost:3000';

// ------------------vant-ui全局导入------------------------------------
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// -----------------------vantui按需加载---------------------------------------
import { Toast } from 'vant';
Vue.use(Toast);
// ----------------------公共组件---------------------------------------
import HmHeader from './components/HmHeader.vue';
Vue.component('HmHeader', HmHeader);

import HmLogo from './components/HmLogo.vue';
Vue.component('HmLogo', HmLogo);

import HmLogoBtn from './components/HmLoginBtn.vue';
Vue.component('HmLogoBtn', HmLogoBtn);

import HmInput from './components/HmInput.vue';
Vue.component('HmInput', HmInput);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
