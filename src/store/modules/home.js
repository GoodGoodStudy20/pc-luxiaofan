
import { reqgetBaseCategoryList ,reqGetRequest} from "../../api/sortnav"
export default {
    state: {
        categoryList: [],
        banners:[],
    },
    getters:{},
    actions: {
        async getCategoryList ( { commit } ) {
            const categoryList = await reqgetBaseCategoryList()
            // console.log(reqgetBaseCategoryList().slice(0,15));
            commit( "GET_CATEGORY_LIST", categoryList )
        },
        async getBanners ( { commit } ) {
            const banners = await reqGetRequest()
            // console.log(reqGetRequest().slice(0,15));
            commit( "GET_BANNERS", banners )
        }
    },
    mutations: {
        GET_CATEGORY_LIST ( state, categoryList ) {
            state.categoryList = categoryList.slice(0,15)
        },
        GET_BANNERS ( state, banners ) {
            state.banners = banners
        }
    },
}