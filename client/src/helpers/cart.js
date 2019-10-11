export const convertCartItemsToObj = (cartItems) => {
    return cartItems.reduce((prev, cur) => {
        prev[cur.id] = true;
        return prev;
    }, {});
}