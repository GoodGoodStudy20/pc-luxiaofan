import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Search from "../views/Search"
import Detail from "../views/Detail"
import ShopCart from "../views/ShopCart"
import AddCartSuccess from "../views/AddCartSuccess"
import Center from "../views/Center"
import Pay from "../views/Pay"
import PaySuccess from "../views/PaySuccess"
import Trade from "../views/Trade"

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

const router = new VueRouter( {
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
        {
            name: "addcartsuccess",
            path: "/addcartsuccess",
            component: AddCartSuccess,
        },
        {
            name: "center",
            path: "/center",
            component: Center,
        },
        {
            name: "pay",
            path: "/pay",
            component: Pay,
        },
        {
            name: "paysuccess",
            path: "/paysuccess",
            component: PaySuccess,
        },
        {
            name: "trade",
            path: "/trade",
            component: Trade,
        },
    ],
    scrollBehavior () {
        return {
            x: 0, y: 0
        }
    }
} )
const permissionPaths = [ "/pay", "/paysuccess", "/trade", "/center" ]
router.beforeEach( ( to, from, next ) => {
    if ( permissionPaths.indexOf( to.path ) > -1 && !store.state.user.token ) {
        return next( "/login" )
    }
    next()
} )

export default router
