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
    return instance.delete(`follow/${id}`);
  },
  getFollow(id) {
    return axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
      {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "b646a86b-c429-4f08-bf83-c5463944ba71"
        }
      }
    );
  }
};
export const profileAPI = {
  getUsersProfile(userId) {
    return instance.get("profile/" + userId);
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status });
  }
};
export const AuthAPI = {
  getAuth(){
    return instance.get(`auth/me`)
  }
};
