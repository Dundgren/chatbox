<template>
    <form>
        <input type="text" v-model="username">
        <input type="button" v-on:click="setUsername">
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