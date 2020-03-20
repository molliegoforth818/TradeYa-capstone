const baseURL = "http://localhost:8088"

export default{
    get(id) {
        return fetch(`${baseURL}/clothingItem/${id}`).then(result =>result.json())
    },
    getAll(){
        return fetch(`${baseURL}/clothingItem`).then(result=>result.json())
    },
    delete(id) {
        return fetch(`${baseURL}/clothingItem/${id}`,{
            method: "DELETE"
        }).then(result => result.json())
    },
getAllClothingItemsByUser() {
    return fetch (`${baseURL}/clothingItem?_expand=user`).then(resp => resp.json());
},
update(editedClothingItem) {
    return fetch (`${baseURL}/clothingItem/${editedClothingItem.id}`, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedClothingItem)
    }).then(data=> data.json());
  },
}