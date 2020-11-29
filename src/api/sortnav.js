import request from "./../utils/request"


export const reqgetBaseCategoryList = () => {
    return request( {
        method: "GET",
        url: "/product/getBaseCategoryList",
    } )

}