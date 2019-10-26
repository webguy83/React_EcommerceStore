export const lowerCaseCountry = (country) => {
    return country.replace(" ", "").toLowerCase();
}

export const addToCart = (cartItems, newCartItem) => {
    const findCartItem = cartItems.find(item => item.id === newCartItem.id);

    if (findCartItem) { 
        const adjustedCartItems = cartItems.map(item => {
            if(item.id === newCartItem.id) {
                item['qty']++;
                return item;
            } else {
                return item;
            }
        });
        return adjustedCartItems;
    } else {
        const adjustedNewCartItem = {
            ...newCartItem,
            qty: 1
        }
        return [...cartItems, adjustedNewCartItem];
    }
}

export const subtractFromCart = (cartItems, newCartItem) => {
    const adjustedCartItems = cartItems.map(item => {
        if(item.id === newCartItem.id) {
            item['qty']--;
            return item;
        } else {
            return item;
        }
    });
    return adjustedCartItems;
}

export const removeFromCart = (cartItems, removalItem) => {
    return cartItems.filter(item => item.id !== removalItem.id);
}

export const convertCollectionsToArray = (collections) => {
    collections = collections ? Object.keys(collections).map(collection => {
        return collections[collection];
    }) : []
    return collections;
}

export const getCollection = (collections, collection) => {
    return collections[collection];
}

export const countryFlagCodes = {
    china: "CN",
    southkorea: "KR",
    thailand: "TH",
    malaysia: "MY",
    india: "IN"
}