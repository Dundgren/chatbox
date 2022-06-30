import axios from "axios";

// const baseUrl = "https://serene-reef-48878.herokuapp.com";
const baseUrl = "http://localhost:5000";

export async function apiRegister(username, password) {
    const data = {
        username: username,
        password: password,
        age: "",
        sex: "",
        location: ""
    };

    const result = await axios.post(`${baseUrl}/api/v1/users`, data);

    console.log(result);
}

export async function apiGetUser(username) {
    const result = await axios.get(`${baseUrl}/api/v1/users/${username}`);

    return result.data[0];
}
