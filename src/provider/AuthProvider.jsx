import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { BASE_URL } from "../constVariables/constVariable";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const [isAdmin, setIsAdmin] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [adminLoading, setAdminLoading] = useState(true)
    const GoogleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setAdminLoading(true)
            const userEmail = currentUser?.email || user?.email
            console.log('userEmail', { userEmail })
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            if (user) {
                axios.get(`${BASE_URL}/user?email=${user.email}`)
                    .then(res => {
                        console.log(res.data)
                        setIsAdmin(res.data?.role === 'admin')
                        setAdminLoading(false)
                    })
            }
            else {
                setLoading(false)
            }
            console.log('current user', currentUser);
        });
        return () => {
            return unsubscribe();
        }
    }, [user])
    console.log("isAdmin------------", isAdmin)

    const userInfo = { adminLoading, isAdmin, loading, user, darkMode, setDarkMode, logOut, signIn, handleGoogleSignIn, createUser, setLoading }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;