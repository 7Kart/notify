import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import notifyStore from "./notify";
import loaderState from "./loaderState";
import errorState from "./errorState";

export default new Vuex.Store({
    modules:{
        notifyStore,
        loaderState,
        errorState
    }
});