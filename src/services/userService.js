import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function getUsers() {
  return axios.get(apiEndpoint);
}

export function saveUser(user) {
  return axios.post(apiEndpoint, user);
}
