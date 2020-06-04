import Vue from 'vue'
import App from './App.vue'
import create from '@/utils/create'
import Notice from '@/components/Notice.vue';
import router from './krouter/index'
import store from './kstore'



Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()

Vue.prototype.$notice = function (props) {
  return create(Notice, props)
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
