export default{
    state:{
        isLoadingMessage: false
    },

    mutations:{
        setIsLoadingMessage(state, payload){
            state.isLoadingMessage = payload;
        }
    },

    actions:{
        setIsLoadingMessage({commit}, isLoading){
            commit("setIsLoadingMessage", isLoading);
        }
    },

    getters:{
        getIsLoadingMessage(state){
            return state.isLoadingMessage;
        }
    }
}