const baseURL = "http://localhost:8088"

export default{
    get(id) {
        return fetch(`${baseURL}/closet/${id}`).then(result =>result.json())
    },
    getAll(){
        return fetch(`${baseURL}/closet`).then(result=>result.json())
    },
    delete(id) {
        return fetch(`${baseURL}/closet/${id}`,{
            method: "DELETE"
        }).then(result => result.json())
    },
getAllClothingItemsByUser() {
    return fetch (`${baseURL}/closet?_expand=user`).then(resp => resp.json());
}
}