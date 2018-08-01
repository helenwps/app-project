import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'
import store from './store';
import '@/assets/less/base.less';

import FastClick from 'fastclick';

//引入UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

const { UCenterPlugins } = require('./plugins/index');
Vue.use(UCenterPlugins);

import { vueCompsInstall } from '@/components/common';
vueCompsInstall(Vue);

// fastclick,解决移动端300ms延迟
if ('addEventListener' in document) {
  document.addEventListener(  
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
