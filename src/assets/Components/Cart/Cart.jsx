/* This code snippet is a React functional component named Cart. It imports necessary dependencies
such as React, useContext, useEffect, and useState from the React library. It also imports
other components like Footer, CartRowItem, and the CartContext from specific file paths. */
import React, { useContext, useEffect, useState } from "react";
import cartBg from "/cart-img.jpg";
import CartRowItem from "./CartRowItem";
import { CartContext } from "./CartContextProvider";

const Cart = () => {
    const { cartItems, getTotalPriceAmount } = useContext(CartContext);

    useEffect(() => {
        document.title = "Cart-DUTO";
    }, []);

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${cartBg})`,
                    height: "20rem",
                    backgroundSize: "cover",
                }}
                className=""
            ></div>
            <div className="flex justify-between gap-16 p-14 w-[100%]">
                <div className="w-[100%]">
                    <h1 className="font-semibold text-[24px] tracking-[2px]">
                        SHOPPING CART
                    </h1>
                    <CartRowItem />
                </div>
                {cartItems.length === 0 ? (
                    <h1>NO ITEMS IN YOUR CART</h1>
                ) : (
                    <div className="top-28 sticky flex flex-col justify-around bg-[#f3f3f3] p-[35px] w-[30%] h-[25rem]">
                        <h1 className="font-semibold text-[1.2rem] tracking-[.2rem]">
                            CART TOTALS
                        </h1>
                        <div className="flex flex-col gap-3 tracking-[.1rem]">
                            <div className="flex justify-between">
                                <span>SUBTOTAL</span>
                                <span className="font-sans">
                                    {getTotalPriceAmount()[0]}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>DELIVERY FEE</span>
                                <span className="font-sans">$5</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4 border"></div>
                            <div>
                                <div className="relative top-3 flex justify-between items-center mb-4 font-bold">
                                    <span>TOTAL</span>
                                    <span className="font-sans text-[24px]">
                                        {getTotalPriceAmount()[1]}
                                    </span>
                                </div>
                                <button className="relative top-6 flex justify-center items-center bg-black px-10 py-3 w-[20rem] text-white">
                                    PROCEED TO CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
