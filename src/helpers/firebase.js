import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRz973Ws_ahev3Yq9aPkpavOf_-LsSYuk",
    authDomain: "ecommerce-asia-db.firebaseapp.com",
    databaseURL: "https://ecommerce-asia-db.firebaseio.com",
    projectId: "ecommerce-asia-db",
    storageBucket: "",
    messagingSenderId: "72080573140",
    appId: "1:72080573140:web:5691ef1d6c92a6a3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDoc = async (userAuth, otherData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        const data = {
            displayName,
            email,
            createdAt,
            ...otherData
        }
        try {
            await userRef.set(data);
        } catch (err) {
            console.log(err.message)
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;