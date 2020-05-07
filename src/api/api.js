import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "4870c220-affc-4d36-b1b2-8cbd7701626f"
  }
});
export const userAPI = {
  getUsers(page = 1, count = 10) {
    return instance.get(`users?page=${page}&count=${count}`).then(response => {
      return response.data;
    });
  },
  getUnfollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data;
    });
  },
  getFollow(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data;
    });
  }
};
