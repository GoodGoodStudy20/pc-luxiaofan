import {
    reqGetCartList,
    reqUpdateCartCount,
    reqGetCheckCart,
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
            commit( "GET_CART_LIST", cartList )
        },
        async updateCartCount ( { commit }, { skuId, skuNum
        } ) {
            await reqUpdateCartCount( skuId, skuNum )
            commit( "UPDATE_CART_COUNT", { skuId, skuNum } )
        },
        async getCheckCart ( { commit }, { skuId, isChecked } ) {
            await reqGetCheckCart()
            commit( "GET_CHECK_CART", { skuId, isChecked } )
        },
        // async getCartList ( { commit } ) {
        //     const cartList = await reqGetCartList()
        //     commit( "GET_CARTLIST", cartList )
        // },
    },
    mutations: {
        GET_CART_LIST ( state, cartList ) {
            state.cartList = cartList
        },
        UPDATE_CART_COUNT ( state, { skuId, skuNum } ) {
            state.cartList = state.cartList.map( ( cart ) => {
                if ( cart.skuId === skuId ) {
                    cart.skuNum += skuNum
                }
                return cart
            } )
        },
        GET_CHECK_CART ( state, { skuId, isChecked } ) {
            state.cartList = state.cartList.map( ( cart ) => {
                if ( cart.skuId === skuId ) {
                    cart.isChecked === isChecked
                }
                return cart
            })
        }
    },
}