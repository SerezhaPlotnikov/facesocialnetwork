// import * as axios from "axios";

const axios = require("axios").default;

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b646a86b-c429-4f08-bf83-c5463944ba71"
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
// export const getUsersProfileAll = {
//   getUsersProfileAll(userId) {
//     return axios.all([
//       profileAPI.getUsersProfile(userId),
//       profileAPI.getStatus(userId)
//     ]);
//   }
// };

export const authAPI = {
  getAuth() {
    return instance.get("auth/me");
  },
  loginAuth(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logoutAuth() {
    return instance.delete(`auth/login`);
  }
};
