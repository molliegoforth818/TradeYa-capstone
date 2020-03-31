const baseURL = "http://localhost:8088";
export default {
  get(id) {
    return fetch(`${baseURL}/groupClosetMembers/${id}`);
  },
  getAllGroupClosets() {
    return fetch(`${baseURL}/groupClosets?_expand=user`).then(res =>
      res.json()
    );
  },
  getAllGroupClosetMembers() {
    return fetch(`${baseURL}/groupClosetMembers?_expand=user&_expand=groupCloset`).then(result =>
      result.json()
    );
  }
};
