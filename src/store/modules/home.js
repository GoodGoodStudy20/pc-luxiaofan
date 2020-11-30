
import { reqgetBaseCategoryList } from "../../api/sortnav"
export default {
    state: {
        categoryList: []
    },
    getters:{},
    actions: {
        async getCategoryList ( { commit } ) {
            const categoryList = await reqgetBaseCategoryList()
            // console.log(reqgetBaseCategoryList().slice(0,15));
            commit( "GET_CATEGORY_LIST", categoryList )
        }
    },
    mutations: {
        GET_CATEGORY_LIST ( state, categoryList ) {
            state.categoryList = categoryList.slice(0,15)
        }
    },
}