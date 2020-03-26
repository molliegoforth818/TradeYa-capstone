const baseURL = "http://localhost:8088" 
export default {
    get(id){
        return fetch (`${baseURL}/groupclosetmembers/${id}`)
    },
getAllGroupClosetMembers(){
return fetch (`${baseURL}/groupclosetmembers?_expand=user`).then(result=>result.json());
},

}