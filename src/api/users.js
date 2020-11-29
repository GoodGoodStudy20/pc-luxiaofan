import request from "../utils/request"


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