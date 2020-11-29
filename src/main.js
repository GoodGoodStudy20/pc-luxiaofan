import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import "./styles/reset.css"
import "./styles/index.css"
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  render: h => h( App ),
  router,
}).$mount('#app')
