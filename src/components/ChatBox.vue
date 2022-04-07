<template>
    <div id="id-card">
        <p>
            <b>{{ this.$store.state.username }}</b> <br>
            Age:<br>
            Sex:<br>
            Location:<br>
        </p>
    </div>
    <div id="chat-box">
        <div v-for="m in messages" :key="m.id_">
            <div id="message-box">
                <h2>{{ m.username }} <span id="date-string">{{ m.timestamp }}</span> </h2>
                <p>{{ m.message }}</p>
            </div>
        </div>
    </div>
    <textarea v-model="message" @keydown.enter.exact.prevent="sendMessage" id="message-input">
    </textarea>
    <input type="button" value="Send" @click="sendMessage" id="send-message-button">
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
            this.message = "";
        },
        async getMessages() {
            let newMessages = await apiGetMessages();

            newMessages.data.forEach(m => {
                const d = new Date(m.timestamp);

                m.timestamp = d.toLocaleString("sv-SE");
            });

            this.messages = newMessages.data;
        }
    },
    created() {
        setInterval(this.getMessages, 1000);
    }
}
</script>

<style lang="scss" scoped>
    #id-card {
        box-sizing: border-box;
        background-color: #631b93;
        border-bottom: 1em solid #4c1074;
        border-top: 1em solid #4c1074;
        padding: 0.5em;
        grid-column: 18 / 24;
        grid-row: 1 / 5;
        width: 100%;
    }

    #chat-box {
        overflow-y: scroll;
        grid-column: 2 / 24;
        grid-row: 5 / 22;
        width: 100%;
        background-color: #eee;
        background-color: #631b93;
    }

    #message-box {
        padding: 0 1em 1em 1em;
        width: 100%;
        word-wrap: break-word;
        box-sizing: border-box;
        white-space: pre;
    }

    #date-string {
        font-size: 0.6em;
    }

    #message-input {
        grid-column: 2 / 22;
        grid-row: 22 / 24;
        box-sizing: border-box;
        width: 100%;
        border: none;
        padding: 1em;
        background-color: #74389d;
        resize: none;
    }

    #send-message-button {
        grid-column: 22 / 24;
        grid-row: 22 / 24;
        width: 100%;
        background-color: #8f5ab3;
        border: none;
        color: #eee;
    }
</style>