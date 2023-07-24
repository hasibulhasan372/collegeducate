import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()


    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
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
    const resetPassword =(email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        logIn,
        signUp,
        loading,
        setLoading,
        logOut,
        googleLogIn,
        updateProfileInfo,
        resetPassword

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider