import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            username: "",
            message: "",
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setMessage(state, message) {
            state.message = message;
        }
    }
});
