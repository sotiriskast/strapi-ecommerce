import React, {createContext, useState} from 'react';
import {useRouter} from "next/router";
import {router} from "next/client";
const AuthContext = createContext()
export const AuthProvider = (props) => {
    const [user, setUser] = useState(initState);
    const loginUser= (email)=>{
        setUser({email})
        router.push('/')
    }
    const logoutUser=async ()=>
    {
        setUser(null)
        router.push('/')
    }
    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;