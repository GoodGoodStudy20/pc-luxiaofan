/*
    userTempId 未登录用户的临时id
        通过uuid来生成
    1. 因为每个userTempId自己的购物车数据
            后台会根据userTempId的值来返回购物车数据
            如果userTempId刷新了，购物车数据就没了（清空了）
        所以生成后要持久存储起来，未来将来可以反复使用
            localStorage 永久存储
            sessionStorage 回话存储（一旦关闭浏览器数据就会被清空）
                xxx.setItem(key, value) 存储
                xxx.getItem(key) 读取
                xxx.removeItem(key) 删除单个
                xxx.clear() 清空所有
    2. 整体流程：
        - 先读取本地localStorage数据，看是否有userTempId
        - 如果有，直接使用
        - 如果没有，需要创建userTempId，同时保存在localStorage中

    3. 在内存中缓存一份localStorage数据，让性能更好
*/
//封装axios拦截器
import axios from "axios"
import store from "../store"
import getUserTempId from "./getUserTempId"
import NProgress from "nprogress"
import { Message } from "element-ui";
import "nprogress/nprogress.css"
const userTempId = getUserTempId()
//通过区分运行环境来知道是开发还是上线环境，设置服务器地址
const prefix_url = process.env.NODE_ENV === "development" ? "/" : "http://182.92.128.115/"
const instance = axios.create( {
    //  / 就是当前服务器地址
    baseURL: `${ prefix_url }api`,// 公共的基础路径
    headers: {
        // token: 'xxx' // 不行，登录接口不需要
    }
} )
// 设置请求拦截器

instance.interceptors.request.use(
    ( config ) => {
        // config 请求的配置对象
        // 将来发送请求（请求地址，请求参数，请求方式等）都会在config中找
        // 修改config，用来添加公共的请求参数
        // if (token) {
        //   config.headers.token = token;
        // }
        NProgress.start();
        const token = store.state.user.token
        if ( token ) {
            config.headers.token = token
        }
        config.headers.userTempId = userTempId
        return config
        // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
    } )
// 设置响应拦截器
instance.interceptors.response.use(
    /*
      响应成功不能代表功能成功，只是代表有响应结果
        功能成功是否成功看 code
          成功：200
          失败：201 202

      返回一个具体为
        成功：成功的数据
        失败：失败的原因
      的结果

      response的数据结构：
        {
          headers: {},
          status: {},
          request: {},
          data: { // 响应的数据
            code: 200,
            message: "成功",
            data:{
              nickName:"Administrator",
              name:"Admin",
              token: 90aa16f24d04c7d882051412f9ec45b"
            },
            ok: true
          }
        }
    */
    // 响应成功：当响应状态码为 2xx
    ( response ) => {
        NProgress.done();
        //响应成功的状态码
        if ( response.data.code === 200 ) {
            return response.data.data
        }
        const { message } = response.data
        Message.error(message)
        return Promise.reject( message )
    },
    ( err ) => {
        NProgress.done();
        const message = err.message || "网络错误"
        Message.error(message)
        return Promise.reject( message )
    }
)
export default instance