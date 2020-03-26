const baseURL = "http://localhost:8088";

export default {
  getUsers(id) {
    return fetch(`${baseURL}/users/${id}`).then(result => result.json());
  },
  getUserProfile(id) {
    return fetch(`${baseURL}/users/${id}?_embed=clothingItem`).then(result => result.json());
  },
  update(editedUserProfile) {
    return fetch(`${baseURL}/closet/${editedUserProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUserProfile)
    }).then(data => data.json());
  }
};
