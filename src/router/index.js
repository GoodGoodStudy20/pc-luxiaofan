import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Search from "../views/Search"
import Detail from "../views/Detail"
import ShopCart from "../views/ShopCart"

const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace

VueRouter.prototype.push = function ( location, onComplete, onAbout ) {
    if ( onComplete && onAbout ) {
        return push.call( this, location, onComplete, onAbout )
    }
    return push.call( this, location, onComplete, () => { } )
}
VueRouter.prototype.replace = function ( location, onComplete, onAbout ) {
    if ( onComplete && onAbout ) {
        return replace.call( this, location, onComplete, onAbout )
    }
    return replace.call( this, location, onComplete, () => { } )
}
Vue.use( VueRouter )

export default new VueRouter( {
    routes: [
        {
            path: "/",
            component: Home
        },
        {//设置meta参数，可以通过this.$route.meta获取,用来显示隐藏Footer组件
            path: "/login",
            component: Login,
            meta: {
                isFooterHide: true,
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                isFooterHide: true,
            }
        },
        {
            name: "search",
            path: "/search/:searchText?",
            component: Search,
        },
        {
            name: "detail",
            path: "/detail/:id",
            component: Detail,
        },
        {
            name: "shopcart",
            path: "/shopcart",
            component: ShopCart,
        },
    ],
    scrollBehavior () {
        return {
            x: 0, y: 0
        }
    }
} )
