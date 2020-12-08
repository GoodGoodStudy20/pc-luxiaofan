import request from "../utils/request"

export const reqOrderTrade = () => {
    return request( {
        method: "GET",
        url: "/order/auth/trade"
    } )
}

export const reqOrderAuto = ( page, limit ) => {
    return request( {
        method: "GET",
        url: `/order/auth/${ page }/${ limit }`,
        params: {
            page,
            limit
        }
    } )
}

export const reqQrCode = (orderId) => {
    return request( {
        method: "GET",
        url: `/payment/weixin/createNative/${ orderId }`,
    } )
}
export const reqSubmitOrder = (
    { tradeNo,
        consignee,
        consigneeTel,
        deliveryAddress,
        paymentWay,
        orderComment,
        orderDetailList }, ) => {
    return request( {
        method: "POST",
        url: "/order/auth/submitOrder",
        params: {
            tradeNo,
        },
        data: {
            consignee,
            consigneeTel,
            deliveryAddress,
            paymentWay,
            orderComment,
            orderDetailList,
        }
    } )
}
