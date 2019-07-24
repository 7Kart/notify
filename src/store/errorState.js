export default {
    state:{
        messageQueryErr:null
    },

    mutations:{
        setMessageQueryErr(state, payload){
            state.messageQueryErr = payload;
        }
    },

    actions:{
        setMessageQueryErr({commit}, error){
            commit("setMessageQueryErr", error);
        }
    },

    getters:{
        getMessageQueryErr(state){
            return state.messageQueryErr;
        }
    }
}