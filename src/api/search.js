import request from "../utils/request"
//获取搜索页数据接口
export const reqGetProductList = ( data ) => {
    return request( {
        method: "POST",
        url: "/list",
        data
    } )
}