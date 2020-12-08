import request from "../utils/request"
import mockRequest from "../utils/mockRequest"
//获取三级分类列表接口
export const reqgetBaseCategoryList = () => {
    return request( {
        method: "GET",
        url: "/product/getBaseCategoryList",
    } )

}
export const reqGetBanners = () => {
    return mockRequest( {
        method: "GET",
        url: "/banners",
    } )
}
export const reqGetFloors = () => {
    return mockRequest( {
        method: "GET",
        url: "/floors",
    } )
}