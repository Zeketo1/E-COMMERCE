import React, { useContext } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "./CartContextProvider";

const CartRowItem = () => {
    const { cartItems, addToCart, reduceProductQuantity, removeFromCart } =
        useContext(CartContext);

    return (
        <>
            {cartItems.map((cartItem) => (
                <div key={cartItem.id} className="w-[100%]">
                    <div className=" flex items-center gap-[5rem] p-4">
                        <div className="flex items-center gap-5">
                            <RxCross2
                                onClick={() => removeFromCart(cartItem.id)}
                            />
                            <img
                                className="h-[112px] w-[92px] object-contain"
                                src={cartItem.image}
                                alt=""
                            />
                        </div>
                        <span className="productName uppercase font-semibold text-[12px] line-clamp-1">
                            {cartItem.name}
                        </span>
                        <span className="productPrice font-sans">
                            ${cartItem.price}
                        </span>
                        <button className="flex py-2 px-2 border gap-12 text-[#999] text-[.8rem]">
                            <span>Quantity</span>
                            <span className="flex items-center gap-4">
                                <IoMdArrowDropleft
                                    onClick={() =>
                                        reduceProductQuantity(cartItem.id)
                                    }
                                />
                                <span>{cartItem.quantity}</span>
                                <IoMdArrowDropright
                                    onClick={() => addToCart(cartItem)}
                                />
                            </span>
                        </button>
                        <span className="font-sans">
                            ${cartItem.price * cartItem.quantity}
                        </span>
                    </div>
                    <div className="border mb-51"></div>
                </div>
            ))}
        </>
    );
};

export default CartRowItem;
