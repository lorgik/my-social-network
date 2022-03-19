import axios from "axios";
import {getProfile} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "7ddfd323-a67c-477f-bcd2-9b0d41d4b637"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
        )
    },
    unfollow(userId) {
        return (
            instance.delete(`follow/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    },
    follow(userId) {
        return (
            instance.post(`follow/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    }
};

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/` + userId)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, { status })
        )
    }
};

export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, { email, password, rememberMe })
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    },


}

