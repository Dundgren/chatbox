import axios from "axios";

// const baseUrl = "https://serene-reef-48878.herokuapp.com";
const baseUrl = "http://localhost:5000";

export async function apiSendMessage(userId, message) {
    const data = {
        user: userId,
        message: message
    };

    const result = await axios.post(`${baseUrl}/api/v1/messages`, data);

    console.log(result);
}

export async function apiGetMessages() {
    const result = await axios.get(`${baseUrl}/api/v1/messages`);

    return result;
}
