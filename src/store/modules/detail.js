import { reqGetProductDetail } from "../../api/detail"
export default {
    state: {
        productDetail: {
            skuInfo: {},
            categoryView: {},
            spuSaleAttrList: [],
        }
    },
    getters: {
        skuInfo (state) {
            return state.productDetail.skuInfo
        },
        categoryView (state) {
            return state.productDetail.categoryView
        },
        spuSaleAttrList (state) {
            return state.productDetail.spuSaleAttrList
        },
    },
    actions: {
        async getProductDetail ( { commit }, id ) {
            const productDetail = await reqGetProductDetail( id )
            commit( "GET_PRODUCT_DETAIL", productDetail )
        },
    },
    mutations: {
        GET_PRODUCT_DETAIL ( state, productDetail ) {
            state.productDetail = productDetail
        }
    },
}