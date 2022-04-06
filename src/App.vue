<template>
    <div id="main">
        <HeaderTitle />
        <ChatBox v-if="this.$store.state.username" />
        <LoginForm v-else />
    </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import ChatBox from "./components/ChatBox.vue";
import HeaderTitle from "./components/HeaderTitle.vue";

export default {
    name: 'App',
    components: {
        LoginForm,
        ChatBox,
        HeaderTitle
    }
}
</script>

<style>
body {
    background-color: #4c1074;
    color: #eee;
    margin: 0;
}

#main {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(24, 1fr);
    justify-items: center;
    height: 100vh;
}
</style>
