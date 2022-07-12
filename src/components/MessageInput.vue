<template>
    <textarea v-model="message" @keydown.enter.exact.prevent="sendMessage" id="message-input">
    </textarea>
    <input type="button" value="Send" @click="sendMessage" id="send-message-button">
</template>

<script>
import { apiSendMessage } from "../helpers/message";

export default {
    data() {
        return {
            message: "",
        }
    },
    methods: {
        sendMessage() {
            if (this.message.trim().length > 0) { // Check so message isn't empty or only whitespaces
                apiSendMessage(this.$store.state.userId, this.message);
                this.message = "";
            }
        },
    }
}
</script>

<style lang="scss" scoped>
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