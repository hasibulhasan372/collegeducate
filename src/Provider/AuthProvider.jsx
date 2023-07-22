import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()


    const signUp = (email, password) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
    };

    const logIn = (email, password) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
    };
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    const logOut =()=>{
        setLoading(true);
        signOut(auth)
    };


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser);
                setLoading(false)
        });
        return()=>{
            return unsubscribe;
        };
    },[]);
    const updateProfileInfo = (name, photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
    };

    const authInfo = {
        user,
        logIn,
        signUp,
        loading,
        setLoading,
        logOut,
        googleSignIn,
        updateProfileInfo

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider