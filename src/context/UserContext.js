import { createContext, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();
const initialState = { isLogin: false, user: {} };

const reducer = async (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "USER_SUCCESS":
        case "LOGIN_SUCCESS":
            await AsyncStorage.setItem("@token", payload.token);
            console.log(payload);
            return { isLogin: true, user: payload };
        case "AUTH_ERROR":
        case "LOGOUT":
            await AsyncStorage.removeItem("@token");
            return { isLogin: false, user: {} };
        default:
            throw new Error();
    }
};

export function UserContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
}