import Vue from "vue"
import VueLazyload from "vue-lazyload";
import loading from "../assets/images/loading.jpg"

Vue.use( VueLazyload, {
    loading: loading
} )