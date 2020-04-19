export const addItemToCart = (cartItems, cartItemToAdd) => {
    const alreadyInCart = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id
    );

    if(alreadyInCart) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ?{...cartItem, qty: cartItem.qty + 1}
            : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, qty: 1}];
}