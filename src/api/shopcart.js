import request from "../utils/request"

//获取购物车的数据信息
export const reqGetCartList = () => {
    return request( {
        method: "GET",
        url: "/cart/cartList"
    } )
}
//添加减少购物车的商品数量
export const reqUpdateCartCount = ( skuId, skuNum ) => {
    return request( {
        method: "POST",
        url: `/cart/addToCart/${skuId}/${skuNum}`
    } )
}
//切换商品的选中状态/
export const reqGetCheckCart = ( skuId, isChecked ) => {
    return request( {
        method: "GET",
        url: `/cart/checkCart/${ skuId }/${ isChecked }`
    } )
}
//删除商品
export const reqGetDeleteCart = ( skuId ) => {
    return request( {
        method: "DELETE",
        url: `/cart/deleteCart/${ skuId }`
    } )
}