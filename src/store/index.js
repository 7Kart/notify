import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import notifyStore from "./notify"

export default new Vuex.Store({
    modules:{
        notifyStore
    }
});