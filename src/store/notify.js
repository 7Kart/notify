import loadMore from "../assets/js/loadMore";
import { stat } from "fs";

export default{
    state:{
        messages:[],
        mainMessage:[]
    },

    mutations:{
        setMessages(state, payload){
            state.messages = payload;
        },
        setMainMessages(state, payload){
            state.mainMessage = payload;
        },
        loadMessage(state, payload){
            state.mainMessage = [...state.mainMessage, ...payload];
        }
    },

    actions:{
        setMessages({commit}, payload){
            commit("setMessages", payload);
        },

        setMainMessages({commit}, payload){
            commit("setMainMessages", payload);
        },

        loadMessage({commit, getters}){
            let messages = getters.getMessageFilter;
            commit("loadMessage", loadMore(messages));
        }
    },

    getters:{
        getMessages(state){
            return state.messages
        },
        getMainMessages(state){
            return state.mainMessage
        },
        getMessageFilter(state){
            return state.messages.filter(mes=>{
                return mes.main == false;
            });
        }
    }
}