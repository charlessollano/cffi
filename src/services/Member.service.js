import http from "../http-common";

class MemberDataService {
  getAll() {
    return http.get("/member");
  }

  get(id) {
    return http.get(`/member/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/member/${id}`, data);
  }

  delete(id) {
    return http.delete(`/member/${id}`);
  }

  deleteAll() {
    return http.delete(`/member`);
  }

  findByName(keywords) {
    return http.get(`/member?keywords=${keywords}`);
  }
}

export default new MemberDataService();