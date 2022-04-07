<template>
    <div id="id-card">
        <p>
            <b>{{ this.$store.state.username }}</b> <br>
            Age: TBA<br>
            Sex: TBA<br>
            Location: TBA<br>
        </p>
    </div>
    <div id="chat-box" ref="chatBoxDiv" @scroll="stopScrollToBottom">
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
            shouldScrollToBottom: true,
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
        async getMessages() {
            let newMessages = await apiGetMessages();

            newMessages.data.forEach(m => {
                const d = new Date(m.timestamp);

                m.timestamp = d.toLocaleString("sv-SE");
            });

            this.messages = newMessages.data;
        },
        sendMessage() {
            apiSendMessage(this.$store.state.username, this.message);
            this.message = "";
        },
        scrollToBottom() {
            if (this.$refs.chatBoxDiv.scrollHeight - this.$refs.chatBoxDiv.scrollTop == this.$refs.chatBoxDiv.clientHeight) {
                this.shouldScrollToBottom = true;
            }
            if (this.shouldScrollToBottom) {
                this.$refs.chatBoxDiv.scrollTop = this.$refs.chatBoxDiv.scrollHeight;
            }
        },
        stopScrollToBottom() {
            this.shouldScrollToBottom = false;
        }

    },
    created() {
        setInterval(this.getMessages, 1000);
    },
    mounted() {
        setInterval(this.scrollToBottom, 500);
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

        h2 {
            margin-top: 0;
        }

        p {
            margin: 0;
        }
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
        color: #eee;

        &:focus {
            outline: none;
        }
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