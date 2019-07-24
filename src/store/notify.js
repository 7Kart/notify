import loadMore from "../assets/js/loadMore";
import axios from "axios";

export default{
    state:{
        messages:[],
    },

    mutations:{
        setMessages(state, payload){
            state.messages = payload.data.notify;
        }
    },

    actions:{
        setMessages({commit}){            
            commit("setIsLoadingMessage",true);         
            commit("setMessageQueryErr",null); 
            setTimeout(()=>{
                axios
                .get("https://tocode.ru/static/c/vue-pro/notifyApi.php")
                .then(response => {
                    commit("setMessages", response);
                    commit("setIsLoadingMessage",false);
                })
                .catch(err => {
                  commit("setMessageQueryErr",err.toString());    
                })
                .finally(() => {
                    commit("setIsLoadingMessage",false);              
                });   
            },800);        
        },
    },

    getters:{
        getMessages(state){
            return state.messages
        }
    }
}