import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
    const initialCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];

    const [cartItems, setCartItems] = useState(initialCartItems);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Save the cart items to localStorage whenever they change

    /**
     * The function addToCart checks if an item is already in the cart and either increments its
     * quantity or adds it with a quantity of 1.
     */
    const addToCart = (item) => {
        let productExists = cartItems.find(
            (cartItem) => cartItem.id === item.id
        );

        if (productExists) {
            setCartItems((p) =>
                p.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems((p) => [...p, { ...item, quantity: 1 }]);
        }
    };

    /**
     * The function reduceProductQuantity decreases the quantity of a product in a cart, and removes
     * it if the quantity is 1.
     */

    //    * The function removeFromCart removes a product from the cart items based on the product ID.
    const removeFromCart = (productId) =>
        setCartItems((p) => p.filter((item) => item.id !== productId));

    const reduceProductQuantity = (productId) => {
        let itemToRemove = cartItems.find(
            (cartItem) => cartItem.id === productId
        );
        if (itemToRemove.quantity > 1) {
            setCartItems((p) =>
                p.map((cartItem) =>
                    cartItem.id === productId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        } else {
            removeFromCart(productId);
        }
    };

    const getTotalPriceAmount = () => {
        const totalPrice = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        const subtotal = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0 + 5
        );
        const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
        const formattedTotalPrice2 = subtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
        return [formattedTotalPrice, formattedTotalPrice2];
    };

    const contextValue = {
        cartItems,
        addToCart,
        reduceProductQuantity,
        removeFromCart,
        getTotalPriceAmount,
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
