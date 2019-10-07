import React, { createContext, useState, useEffect } from 'react';

import { firestore, mapCollectionsToFirebaseSnapShot } from '../helpers/firebase';

export const ShopContext = createContext({
    loading: false,
    collections: null
});

const ShopProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        setLoading(true);
        firestore.collection('collections').get()
            .then(snapShot => {
                setLoading(false);
                setCollections(mapCollectionsToFirebaseSnapShot(snapShot));
            })
    }, [])

    return <ShopContext.Provider value={{
        loading,
        collections
    }}>{children}</ShopContext.Provider>
}

export default ShopProvider;