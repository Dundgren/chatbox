<template>
    <div id="login-form">
        <p>Enter username:</p>
        <input type="text" id="usernameInput" v-model="username" @keypress.enter="setUsername">
        <br>
        <input type="button" value="Join chat!"  @click="setUsername">
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
        }
    },
    methods: {
        setUsername() {
            this.$store.commit("setUsername", this.username);
        }
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
    }
</style>
