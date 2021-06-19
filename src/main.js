import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 Element
import ElementUI from 'element-ui'
// 引入 Element 的主题文件
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

// 将Element 注册为Vue插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
