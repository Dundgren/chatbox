<template>
    <div id="login-form">
        <h2>Login</h2>
        <label for="login-username-input">Username</label>
        <input type="text" id="login-username-input" v-model="username" @keypress.enter="login">
        <br>
        <input type="button" value="Join chat!"  @click="login">
    </div>
    <RegisterForm />
</template>

<script>
import RegisterForm from "./RegisterForm.vue";
import { apiGetUser } from "../helpers/user";

export default {
    data() {
        return {
            username: "",
        }
    },
    methods: {
        async login() {
            const user = await apiGetUser(this.username);

            this.$store.commit("setUsername", user.username);
            this.$store.commit("setUserId", user.id);
        }
    },
    components: {
        RegisterForm
    }
}
</script>

<style lang="scss" scoped>
    #login-form {
        grid-column: 10 / 16;
        grid-row: 5 / 10;
        width: 100%;
        background-color: #631b93;
        display: grid;
        justify-items: center;
        padding: 1em;

        input[type="text"] {
            background-color: #74389d;
            color: #eee;
            border: none;

            &:focus {
                outline: none;
            }
        }

        input[type="button"] {
            background-color: #8f5ab3;
            border: none;
            color: #eee;
        }

        h2 {
            margin: 0;
        }
    }
</style>
