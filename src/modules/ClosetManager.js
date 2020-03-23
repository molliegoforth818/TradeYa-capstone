const baseURL = "http://localhost:8088"

export default{
    get(id) {
        return fetch(`${baseURL}/closet/${id}`).then(result =>result.json())
    },
    getAll(){
        return fetch(`${baseURL}/closet`).then(result=>result.json())
    },
    delete(id) {
        return fetch(`${baseURL}/clothingItem/${id}`,{
            method: "DELETE",
        }).then(result => result.json())
    },
    post(newClothingItem) {
        return fetch(`${baseURL}/clothingItem`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newClothingItem)
        }).then(data => data.json())
    },
getAllClothingItemsByUser() {
    return fetch (`${baseURL}/clothingItem?_expand=user`).then(resp => resp.json());
},
update(editedClothingItem) {
    return fetch (`${baseURL}/closet/${editedClothingItem.id}`, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedClothingItem)
    }).then(data=> data.json());
  }
}