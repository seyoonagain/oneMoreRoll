import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../API/firebase';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(readUserFromLocalStorage);
    useEffect(() => {
        onUserStateChange(setUser);
    }, []);
    return (
        <AuthContext.Provider
            value={{ user, uid: user && user.uid, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function readUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export const useAuthContext = () => useContext(AuthContext);
