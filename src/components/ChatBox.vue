<template>
    <div id="chat-box" ref="chatBoxDiv" @scroll="this.shouldScrollToBottom = false">
            <div v-for="m in messages" :key="m.id_" :class="this.$store.state.username == m.username ? 'message-box message-right' : 'message-box'">
                <h2>{{ m.username }} <span class="date-string">{{ m.timestamp }}</span> </h2>
                <p>{{ m.message }}</p>
            </div>
    </div>
    <!-- <p v-if="!this.shouldScrollToBottom" id="jump-button"><span>You're viewing old messages. Click here to jump to bottom.</span></p> -->
</template>

<script>
import { apiGetMessages } from "../helpers/message";

export default {
    data() {
        return {
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
        scrollToBottom() {
            if (this.$refs.chatBoxDiv.scrollHeight - this.$refs.chatBoxDiv.scrollTop == this.$refs.chatBoxDiv.clientHeight) {
                this.shouldScrollToBottom = true;
            }
            if (this.shouldScrollToBottom) {
                this.$refs.chatBoxDiv.scrollTop = this.$refs.chatBoxDiv.scrollHeight;
            }
        },

    },
    created() {
        setInterval(this.getMessages, 1000);
    },
    mounted() {
        setInterval(this.scrollToBottom, 200);
    }
}
</script>

<style lang="scss" scoped>
    #chat-box {
        overflow-y: scroll;
        grid-column: 2 / 24;
        grid-row: 5 / 22;
        width: 100%;
        background-color: #eee;
        background-color: #631b93;
        padding-top: 1em;
    }

    // #jump-button {
    //     text-align: center;
    //     grid-column: 9 / 17;
    //     grid-row: 21 / 22;

    //     span {
    //         background-color: #8f5ab3;
    //         padding: 0.5em;
    //         border-radius: 1em;

    //         &:hover {
    //             background-color: black;
    //         }
    //     }
    // }

    .message-right {
        text-align: right;
    }

    .message-box {
        padding: 0 1em 1em 1em;
        width: 100%;
        word-wrap: break-word;
        box-sizing: border-box;
        white-space: pre-line;

        h2 {
            margin-top: 0;
        }

        p {
            margin: 0;
        }
    }

    .date-string {
        font-size: 0.6em;
    }
</style>