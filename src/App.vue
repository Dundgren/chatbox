<template>
    <div id="main">
        <HeaderTitle />
        <template v-if="this.$store.state.userId">
            <IdCard />
            <ChatBox  />
            <MessageInput />
        </template>
        <LoginForm v-else />
    </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import ChatBox from "./components/ChatBox.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import IdCard from "./components/IdCard.vue";
import MessageInput from "./components/MessageInput.vue";

export default {
    name: 'App',
    components: {
        LoginForm,
        ChatBox,
        HeaderTitle,
        IdCard,
        MessageInput
    }
}
</script>

<style lang="scss">
    *::-webkit-scrollbar {
        width: 0.6em;
    }

    *::-webkit-scrollbar-track {
        background: rgba(238, 238, 238, 0);
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(238, 238, 238, 0.829);
        border-radius: 30px;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: rgba(238, 238, 238, 0.829) rgba(238, 238, 238, 0);
    }

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
