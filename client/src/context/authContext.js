import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);    // data in local storage stays in string, bt we want it as object, thats why "user" parsed

    const login = async (inputs) => {
        const res = await axios.post("auth/login", inputs);
        setCurrentUser(res.data[0]);
    }

    const logout = async (inputs) => {
        await axios.post("auth/logout");
        setCurrentUser(null);
    }

    // Set current user in local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));      // currentUser is parsed (into object) bt in local storage data stays as string, thats why stringified 
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

