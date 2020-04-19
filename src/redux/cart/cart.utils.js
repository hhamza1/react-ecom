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


export const reduceItemFromCart = (cartItems, cartItemToReduce) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToReduce.id
    )

    if(existingItem.qty === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id);
    }

    return cartItems.map(
        cartItem => 
            cartItem.id === cartItemToReduce.id
            ? {...cartItem, qty: cartItem.qty - 1}
            :  cartItem
    )
}