/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-19 10:00:00
 * @LastEditors: Pony
 * @LastEditTime: 2020-08-24 00:14:51
 */
import Vue from 'vue'
import App from './App.vue'
import {initRouter} from './router'
import './theme/index.less'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import '@/mock'
import store from './store'
import 'animate.css/source/animate.css'
import Plugins from '@/plugins'
import {initI18n} from '@/utils/i18n'
import bootstrap from '@/bootstrap'



const router = initRouter(store.state.setting.asyncRoutes)
const i18n = initI18n('CN', 'US')
bootstrap({router, store, i18n})


Vue.config.productionTip = false
Vue.use(Viser)
Vue.use(Antd)
Vue.use(Plugins)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
