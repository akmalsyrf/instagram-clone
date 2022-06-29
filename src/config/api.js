import axios from "axios";
import { API_URL } from '@env'

export const API = axios.create({
    baseURL: API_URL || "http://localhost:3001/api/v1"
});

export const setAuthToken = (token) => {
    console.log("token", token);
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common["Authorization"];
    }
};