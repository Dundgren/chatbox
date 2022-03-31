import axios from "axios";

export function apiSendMessage(username, message) {
    const data = {
        username: username,
        message: message
    }

    axios.post("http://localhost:8000/api/v1/message", data);
}

export async function apiGetMessages() {
    const result = await axios.get("http://localhost:8000/api/v1/message");

    return result;
}
