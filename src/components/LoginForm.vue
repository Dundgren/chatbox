<template>
    <input type="text" id="usernameInput" v-model="username" @keypress.enter="setUsername">
    <input type="button" value="Join chat!"  @click="setUsername">
</template>

<script>
export default {
    data () {
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

</style>