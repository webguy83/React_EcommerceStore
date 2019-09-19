import { createSelector } from 'reselect';

const cart = state => state.cart;
const user = state => state.user;
const miniCart = state => state.miniCart;
const category = state => state.category;
const shop = state => state.shop;

export const selectCartItems = createSelector(
    cart,
    cart => cart.cartItems
);

export const selectMiniCartHidden = createSelector(
    miniCart,
    miniCart => miniCart.miniCartHidden
)

export const selectIconCartHidden = createSelector(
    miniCart,
    miniCart => miniCart.iconCartHidden
)

export const selectCurrentUser = createSelector(
    user,
    user => user.currentUser
)

export const selectSections = createSelector(
    category,
    category => category.sections
)

export const selectShopData = createSelector(
    shop,
    shop => shop.collections
)

export const selectAllCollections = createSelector(
    selectShopData,
    (allCollections) => {
        const collections = allCollections ? Object.keys(allCollections).map(collection => {
            return allCollections[collection];
        }) : []
        return collections;
    }
)

export const selectIsCollectionsLoaded = createSelector(
    selectShopData,
    allCollections => allCollections === null ? false : true
)

export const selectCollection = (urlParam) => {
    return createSelector(
        selectShopData,
        (collection) => {
            return collection ? collection[urlParam] : null;
        }
    )
}

export const selectCartItemAmount = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((prev, cur) => {
        return prev + cur.qty
    }, 0)
);

export const selectCartItemsTotal = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((prev, cur) => {
        return prev + (cur.qty * cur.price)
    }, 0)
);

export const selectCollectionLoading = createSelector(
    shop,
    shop => shop.collectionsLoading
);