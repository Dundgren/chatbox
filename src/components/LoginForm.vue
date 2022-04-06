<template>
    <div id="login-form">
        <input type="text" id="usernameInput" v-model="username" @keypress.enter="setUsername">
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
        grid-row: 5 / 7;
        width: 100%;
        background-color: #631b93;
        display: grid;
        justify-items: center;
    }
</style>
