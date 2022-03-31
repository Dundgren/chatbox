<template>
    <h1>ChatBox</h1>
    <ChatBox v-if="this.$store.state.username" />
    <LoginForm v-else />
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import ChatBox from "./components/ChatBox.vue";

export default {
    name: 'App',
    components: {
        LoginForm,
        ChatBox
    }
}
</script>

<style>

</style>
