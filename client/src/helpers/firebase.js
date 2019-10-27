import * as firebase from "firebase/app";
import { lowerCaseCountry } from './generic';

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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
    return new Promise((res, rej) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            res(userAuth);
        }, rej)
    });
}

export const updateCollections = (docId) => {
    const countryRefs = firestore.collection("collections").doc(docId);

    // countryRefs.set({0: {
    //     id: 53453453452,
    //     name: "Taj Mahal",
    //     price: 45,
    //     description: "",
    //     images: {
    //         largest: "",
    //         large: "",
    //         medium: "",
    //         small: "",
    //         smallest: ""
    //     },
    //     loc: ""
    // },
    // 1: {
    //     id: 564564544456,
    //     name: "Prince Palace",
    //     price: 35,
    //     description: "",
    //     images: {
    //         largest: "",
    //         large: "",
    //         medium: "",
    //         small: "",
    //         smallest: ""
    //     },
    //     loc: ""
    // },
    // 2: {
    //     id: 89793234,
    //     name: "Ogerville",
    //     price: 23,
    //     description: "",
    //     images: {
    //         largest: "",
    //         large: "",
    //         medium: "",
    //         small: "",
    //         smallest: ""
    //     },
    //     loc: ""
    // },
    // 3: {
    //     id: 7674788888,
    //     name: "Big Temple",
    //     price: 33,
    //     description: "",
    //     images: {
    //         largest: "",
    //         large: "",
    //         medium: "",
    //         small: "",
    //         smallest: ""
    //     },
    //     loc: ""
    // }})
}

export const addCollectionAndDocuments = async (colKey, objsToAdd) => {
    const colRef = firestore.collection(colKey);
    const batch = firestore.batch();
    objsToAdd.forEach(obj => {
        const newDocReference = colRef.doc();
        batch.set(newDocReference, obj);
    });

    return await batch.commit();
}

export const mapCollectionsToFirebaseSnapShot = (collections) => {
    const modifiedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            id: doc.id,
            routeName: encodeURI(lowerCaseCountry(title)),
            title,
            items
        }
    })

    return modifiedCollection.reduce((prev, cur) => {
        prev[lowerCaseCountry(cur.title)] = cur;
        return prev;
    }, {})
}

export default firebase;
