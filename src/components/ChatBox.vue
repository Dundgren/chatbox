<template>
    <div id="chat-box"></div>
    <h2>{{ this.$store.state.username }}</h2>
    <input type="text" v-model="message" @keydown.enter="sendMessage">
    <input type="button" value="Send" @click="sendMessage">
</template>

<script>
import { apiSendMessage } from "../helpers/message";

export default {
    data () {
        return {
            message: "",
        }
    },
    methods: {
        sendMessage() {
            apiSendMessage(this.$store.state.username, this.message);
        }
    }
}
</script>

<style lang="scss" scoped>
    #chat-box {
        border: 1px solid black;
        height: 80vh;
        width: 80vw;
        overflow: scroll;
    }
</style>