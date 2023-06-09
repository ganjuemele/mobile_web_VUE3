import {createStore} from "vuex";

const defaultState = {count: 0};

export default createStore({
    state() {
        return defaultState
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        getotSearch(state) {
            return 2 * state.count
        }
    }
})
