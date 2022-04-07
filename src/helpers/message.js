import axios from "axios";

const baseUrl = "https://serene-reef-48878.herokuapp.com/";

export function apiSendMessage(username, message) {
    const data = {
        username: username,
        message: message
    }

    axios.post(`${baseUrl}/api/v1/message`, data);
}

export async function apiGetMessages() {
    const result = await axios.get(`${baseUrl}/api/v1/message`);

    return result;
}
