import {
    reqGetCartList,
    reqGetAddToCart,
    // reqGetCheckCart,
    // reqGetDeleteCart
} from "../../api/shopcart"

export default {
    state: {
        cartList: [],
    },
    getters: {},
    actions: {
        async getCartList ( { commit } ) {
            const cartList = await reqGetCartList()
            commit( "GET_CARTLIST", cartList )
        },
        async getAddToCart ( { commit }, { skuId, skuNum
        } ) {
            await reqGetAddToCart( { skuId, skuNum } )
            console.log( commit );
        },
        // async getCartList ( { commit } ) {
        //     const cartList = await reqGetCartList()
        //     commit( "GET_CARTLIST", cartList )
        // },
        // async getCartList ( { commit } ) {
        //     const cartList = await reqGetCartList()
        //     commit( "GET_CARTLIST", cartList )
        // },
    },
    mutations: {
        GET_CARTLIST ( state, cartList ) {
            state.cartList = cartList
        },
    },
}