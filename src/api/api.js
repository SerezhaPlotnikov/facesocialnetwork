// import * as axios from "axios";

const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '2b077ddd-a154-4a98-838f-0344a0811bb3',
  },
});
export const userAPI = {
  async getUsers(page = 1, count = 10) {
    const response = await instance.get(`users?page=${page}&count=${count}`);
    return response.data;
  },
  getUnfollow(id) {
    return instance.delete(`follow/${id}`);
  },
  getFollow(id) {
    return instance.post(`follow/${id}`);
  },
};
export const profileAPI = {
  getUsersProfile(userId) {
    return instance.get('profile/' + userId);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status });
  },
  updateProfile(profile) {
    return instance.put('/profile', profile);
  },
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
    return instance.get('auth/me');
  },
  loginAuth(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logoutAuth() {
    return instance.delete(`auth/login`);
  },
};
