
import {reqRegister} from "../../api/users"
export default {
    state:{},
    getters:{},
    actions: {
        async register ( { commit } ) {
           await reqRegister()
            commit( "REGISTER" )
        },
    },
    mutations:{},
}