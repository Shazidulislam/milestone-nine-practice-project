
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    console.log(user , loading)
    const auth = getAuth(app)

    const createUser =(email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email ,password)
    }
    const updateUser =(updatedData)=>{
      return updateProfile(auth.currentUser , updatedData)
    }
    useEffect(()=>{
      const unsubCribe =   onAuthStateChanged(auth,(users)=>{
            setUser(users)
            setLoading(false)
        } )
        return()=>{
         unsubCribe()
        } 
    },[auth])

    const signOutUser =()=>{
        signOut(auth)
        .then(()=>{
            console.log("signOut successFully")
        })
        .catch((error)=>{
            console.log(error)
        })
    }




    const userInforMation ={
        user,
        setUser,
        createUser,
        auth,
        signInUser,
        signOutUser,
        loading,
        updateUser,
    }
    return (
        <AuthContext value={userInforMation}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;