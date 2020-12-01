
import { reqgetBaseCategoryList, reqGetBanners, reqGetFloors } from "../../api/sortnav"
export default {
    state: {
        categoryList: [],
        banners: [],
        floors:[],
    },
    getters: {},
    actions: {
        async getCategoryList ( { commit } ) {
            const categoryList = await reqgetBaseCategoryList()
            // console.log(reqgetBaseCategoryList().slice(0,15));
            commit( "GET_CATEGORY_LIST", categoryList )
        },

        async getBanners ( { commit } ) {
            const banners = await reqGetBanners()
            commit( "GET_BANNERS", banners )
        },
        async getFloors ( { commit } ) {
            const floors = await reqGetFloors()
            commit( "GET_FLOORS", floors )
        }
    },
    mutations: {
        GET_CATEGORY_LIST ( state, categoryList ) {
            state.categoryList = categoryList.slice( 0, 15 )
        },
        GET_BANNERS ( state, banners ) {
            state.banners = banners
        },
        GET_FLOORS ( state, floors ) {
            state.floors = floors
        }
    },
}