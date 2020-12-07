import request from "../utils/request"

//登录接口
export const reqLogin = (phone,password) => {
    return request( {
        method: "POST",
        url: "/user/passport/login",
        //post请求，参数在data里面
        data: {
            phone,
            password
        }
    } )
}

//注册接口
export const reqRegister = ( { phone, password,code }) => {
    return request( {
        method: "POST",
        url: "/user/passport/registern",
        //post请求，参数在data里面
        data: {
            phone,
            password,
            code
        }
    } )
}