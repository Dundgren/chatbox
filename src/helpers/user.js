import axios from "axios";

// const baseUrl = "https://serene-reef-48878.herokuapp.com";
const baseUrl = "http://localhost:5000";

export function apiSendMessage(username, message) {
    const data = {
        username: username,
        message: message
    };

    axios.post(`${baseUrl}/api/v1/messages`, data);
}

export async function apiGetMessages() {
    const result = await axios.get(`${baseUrl}/api/v1/messages`);

    return result;
}
