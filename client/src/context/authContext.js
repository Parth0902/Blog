import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const AuthContext=createContext();

export const AUthcontextProvider=({children})=>
{
    const [currentUser,setCurrentUser]=useState(JSON.parse(sessionStorage.getItem("user") || null));
    const [Token,setToken]=useState("");
     const login= async(inputs)=>
     {
        const res =await axios.post("http://localhost:8800/api/auth/Login",inputs);
        setCurrentUser(res.data.user);
        setToken(res.data.token);
        
     }

     const logout= async(inputs)=>
     {
        await axios.post("http://localhost:8800/api/auth/logout");
        setCurrentUser(null);
     };

     useEffect(()=>
     {
        sessionStorage.setItem("user",JSON.stringify(currentUser));
        sessionStorage.setItem("token",Token);
     },[currentUser,Token]);

     return (
    <AuthContext.Provider value={{currentUser,login,logout}}>
        {children}
    </AuthContext.Provider>

     );
};
  