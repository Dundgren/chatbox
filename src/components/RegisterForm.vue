<template>
    <div id="register-form">
        <h2>Register</h2>
        <label for="register-username-input">Username</label>
        <input type="text" id="register-username-input" v-model="username" @keypress.enter="register">
        <label for="register-password-input">Password</label>
        <input type="password" id="register-password-input" v-model="password" @keypress.enter="register">
        <br>
        <input type="button" value="Register!"  @click="register">
    </div>
</template>
<script>
import { apiRegister } from "../helpers/user";

export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        register() {
            apiRegister(this.username, this.password);
        }
    }
}
</script>

<style lang="scss" scoped>
    #register-form {
        grid-column: 10 / 16;
        grid-row: 11 / 16;
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