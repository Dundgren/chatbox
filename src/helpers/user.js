import axios from "axios";

const baseUrl = "https://serene-reef-48878.herokuapp.com";

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

export async function apiLogin(username, password) {
    const data = {
        username: username,
        password: password
    };

    const result = await axios.post(`${baseUrl}/api/v1/users/login`, data);

    return result.data;
}
