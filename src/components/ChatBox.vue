<template>
    <div id="chat-box">
        <div v-for="m in messages" :key="m.id_">
            {{ m.message }}
        </div>
    </div>
    <h2>{{ this.$store.state.username }}</h2>
    <input type="text" v-model="message" @keydown.enter="sendMessage">
    <input type="button" value="Send" @click="sendMessage">
</template>

<script>
import { apiSendMessage, apiGetMessages } from "../helpers/message";

export default {
    data() {
        return {
            message: "",
        }
    },
    computed: {
        messages: {
            get() {
                return this.$store.state.messages;
            },
            set(data) {
                this.$store.commit("setMessages", data);
            }
        }
    },
    methods: {
        sendMessage() {
            apiSendMessage(this.$store.state.username, this.message);
        },
        async getMessages() {
            const newMessages = await apiGetMessages();
            this.messages = newMessages.data;
            console.log(this.messages);
        }
    },
    created() {
        setInterval(this.getMessages, 1000);
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