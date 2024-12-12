import React, { useEffect, useState } from 'react';
import Authcontext  from './Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../GeneralPages/Firebase/Firebase.init';

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading ] = useState(true);

    // create a new user 
    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // log in 
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    // onsuthstate change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
         setUser(currentuser)
         console.log('user activites is ', currentuser);
         setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])
    // logout 
    const logout = () =>{
        return signOut(auth)
    }
    const allInfo = {
        createUser,
        signIn,
        logout,
        user

    }
    return (
        <Authcontext.Provider value={allInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;




