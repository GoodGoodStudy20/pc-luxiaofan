import request from "../utils/request"
//获取详情页数据接口
export const reqGetProductDetail = ( id ) => {
    return request( {
        method: "GET",
        url: `/item/${ id }`
    } )
}