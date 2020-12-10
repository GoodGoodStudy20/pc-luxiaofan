import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "./mock/mockServer"
import store from "./store"
import "./styles/reset.css"
import "./styles/index.css"
import './plugins/element.js'
import "./plugins/lazyload"
import "./styles/iconfont.css";
Vue.config.productionTip = false
new Vue( {
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: h => h( App ),
  router,
  store
} ).$mount( '#app' )
