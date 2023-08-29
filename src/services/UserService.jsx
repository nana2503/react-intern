// import axios from "axios";
import axios from "./CustomizeAxios";
function UserService(page) {
  return axios.get(`api/users?page=${page}`);
}
function postUser(name, job) {
  return axios.post("/api/users", { name, job });
}
export { UserService, postUser };
