<template>
    <p id="error-message">{{ errorMessage }}</p>
    <div id="login-form">
        <h2>Login</h2>
        <label for="login-username-input">Username</label>
        <input type="text" id="login-username-input" v-model="username" @keypress.enter="login">
        <label for="login-password-input">Password</label>
        <input type="password" id="login-password-input" v-model="password" @keypress.enter="login">
        <br>
        <input type="button" value="Join chat!"  @click="login">
    </div>
    <RegisterForm />
</template>

<script>
import RegisterForm from "./RegisterForm.vue";
import { apiLogin } from "../helpers/user";

export default {
    data() {
        return {
            username: "",
            password: "",
            errorMessage: ""
        }
    },
    methods: {
        async login() {
            if (this.username && this.password) {
                try {
                    const user = await apiLogin(this.username, this.password);

                    this.$store.commit("setUsername", user.username);
                    this.$store.commit("setUserId", user.id);
                } catch {
                    this.errorMessage = "Login failed!";
                }
            } else {
                this.errorMessage = "Both username and password are required!"
            }
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

        input[type="text"], input[type="password"] {
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

    #error-message {
        grid-column: 10 / 16;
        grid-row: 4 / 5;
    }
</style>
