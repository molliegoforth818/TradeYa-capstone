const baseURL = "http://localhost:8088"

export default{
    getAllUsers() {
        return fetch (`${baseURL}/users`).then(resp => resp.json());
},
}