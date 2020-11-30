import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store"
import 'swiper/swiper-bundle.css'
import "./styles/reset.css"
import "./styles/index.css"
import './plugins/element.js'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  render: h => h( App ),
  router,
  store
}).$mount('#app')
