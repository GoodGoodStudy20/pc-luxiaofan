import request from "../utils/request"

export const reqGetCartList = () => {
    return request( {
        method: "GET",
        url: "/cart/cartList"
    } )
}
export const reqGetAddToCart = ( skuId, skuNum ) => {
    return request( {
        method: "POST",
        url: `/cart/addToCart/${ skuId }/${ skuNum }`
    } )
}
export const reqGetCheckCart = ( skuId, isChecked ) => {
    return request( {
        method: "GET",
        url: `/cart/checkCart/${ skuId }/${ isChecked }`
    } )
}
export const reqGetDeleteCart = ( skuId ) => {
    return request( {
        method: "DELETE",
        url: `/cart/deleteCart/${ skuId }`
    } )
}