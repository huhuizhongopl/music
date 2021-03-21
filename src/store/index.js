import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        url:null
    },
    mutations:{
        setUrl(state,url){
            state.url=url
        }
    },
    actions:{
            
    }
})