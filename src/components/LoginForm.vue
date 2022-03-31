<template>
    <form @submit.prevent="onSubmit">
        <input type="text" id="usernameInput" v-model="username" @keypress.enter="setUsername">
        <input type="button" value="Join chat!"  @click="setUsername">
    </form>
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
            console.log(this.$store.state.username);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>