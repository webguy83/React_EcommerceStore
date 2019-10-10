import React, { useState, createContext, useEffect, useContext } from 'react';
import { CartContext } from './cart';
import { getCurrentUser, createUserDoc, auth, googleProvider } from '../helpers/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
    error: "",
    setError: () => { },
    checkUserSession: () => { },
    signInUser: () => { },
    signOutUser: () => { },
    userStatus: false,
    registerUserStatus: true,
    setRegisterUserStatus: () => {}
})

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState("");
    const [userStatus, setUserStatus] = useState(false);
    const [registerUserStatus, setRegisterUserStatus] = useState(true);
    const { clearCart } = useContext(CartContext);

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
                setUserStatus(true);
                setCurrentUser({
                    id: userSnapshot.id,
                    ...userSnapshot.data()
                })
            })
            .catch(err => {
                setError(err);
                setUserStatus(true);
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
                setCurrentUser(null);
                clearCart();
            })
            .catch(err => {
                setError(err.message);
            })
    }

    useEffect(() => {
        checkUserSession();
    }, [])

    return <UserContext.Provider value={{
        currentUser,
        setCurrentUser,
        error,
        setError,
        signInUser,
        signOutUser,
        userStatus,
        registerUserStatus,
        setRegisterUserStatus
    }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;