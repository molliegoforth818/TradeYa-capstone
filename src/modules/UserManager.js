const baseURL = "http://localhost:8088"

export default{
    get(id) {
        return fetch(`${baseURL}/users/{id}`).then(result =>result.json())
    },
    getAllUsers() {
        return fetch (`${baseURL}/users`).then(result => result.json());
},
update(user) {
    return fetch(`${baseURL}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(data => data.json());
  }
}