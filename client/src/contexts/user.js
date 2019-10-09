import React, { useState, createContext, useEffect } from 'react';
import { getCurrentUser, createUserDoc, auth, googleProvider } from '../helpers/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
    error: "",
    setError: () => { },
    checkUserSession: () => { },
    signInUser: () => { },
    signOutUser: () => {}
})

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState("");

    const checkUserSession = () => {
        getCurrentUser()
            .then(userAuth => {
                if (!userAuth) return;
                return createUserDoc(userAuth);
            })
            .then(userRef => {
                return userRef.get();
            })
            .then(userSnapshot => {
                setCurrentUser({
                    id: userSnapshot.id,
                    ...userSnapshot.data()
                })
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const signInUser = async (email, password) => {
        try {
            const { user } = email || password ?
                await auth.signInWithEmailAndPassword(email, password) :
                await auth.signInWithPopup(googleProvider);
            const userRef = await createUserDoc(user);
            const userSnapshot = await userRef.get();

            setCurrentUser({
                id: userSnapshot.id,
                ...userSnapshot.data()
            })
        } catch (err) {
            setError(err.message)
        }
    }

    const signOutUser = () => {
        auth.signOut()
            .then(() => {
                setCurrentUser(null)
            })
            .catch(err => {
                setError(err.message);
            })
    }

    useEffect(() => {
        checkUserSession();
    }, [])

    return <UserContext.Provider value={{
        currentUser, setCurrentUser, error, setError, signInUser, signOutUser
    }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;