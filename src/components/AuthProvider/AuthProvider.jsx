import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.config';

export const authContex=createContext()
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider();
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    const handleRegister=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleLogin=(email,password)=>{
        setLoading(true)
       return  signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(name,image)=>{
        setLoading(true)
      return  updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image,
        })
    }

    const handleLogOut=()=>{
        setLoading(true)
        signOut(auth)
    }

    const handleGoogleLogin=()=>{
        setLoading(true)
         signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            if(currentUser){

                setUser(currentUser)
            }else{
                setUser(null);
            }
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo={
        handleLogOut,
        handleLogin,
        handleRegister,
        handleGoogleLogin,
        user,
        setUser,
        updateUser,
        loading
    }

    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;