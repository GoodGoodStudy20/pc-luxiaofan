//封装axios拦截器
import axios from "axios"
import getUserTempId from "./getUserTempId"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
const instance = axios.create( {
    //  / 就是当前服务器地址
    baseURL: "/api",// 公共的基础路径
    headers: {
        // token: 'xxx' // 不行，登录接口不需要
    }
} )
// 设置请求拦截器
const userTempId = getUserTempId()
instance.interceptors.request.use(
    ( config ) => {
        // config 请求的配置对象
        // 将来发送请求（请求地址，请求参数，请求方式等）都会在config中找
        // 修改config，用来添加公共的请求参数
        // if (token) {
        //   config.headers.token = token;
        // }
        NProgress.start();
        config.headers.userTempId = userTempId
        return config
        // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
    } )
// 设置响应拦截器
instance.interceptors.response.use(
    // 响应成功：当响应状态码为 2xx
    ( response ) => {
        NProgress.done();
        //响应成功的状态码
        if ( response.data.code === 200 ) {
            return response.data.data
        }
        return Promise.reject( response.data.message )
    },
    ( err ) => {
        NProgress.done();
        const message = err.message || "网络错误"
        return Promise.reject( message )
    }
)
export default instance