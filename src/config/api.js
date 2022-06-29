import axios from "axios";
import { API_URL } from './variable'

export const API = axios.create({
    baseURL: API_URL
});

export const setAuthToken = (token) => {
    console.log("TOKEN", token);
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common["Authorization"];
    }
};