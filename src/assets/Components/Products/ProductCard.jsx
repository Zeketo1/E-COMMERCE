/* This code snippet is a React component named ProductCard that represents a product card UI
element. Here's a breakdown of what the code is doing: */
import React, { useContext, useRef, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContextProvider";


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();
  const productRef = useRef();
  const handleClick = (id) => {
    productRef.current.classList.add("animate-pulse");
    setTimeout(() => {
      navigate(`/product/${id}`);
    }, 3000);
  };

  const [like, setLike] = useState(true);
  //const [index, setIndex] = useState(0);
  return (
    <motion.div
      ref={productRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" relative flex flex-col items-center  cursor-pointer group"
    >
      <div
        onClick={() => handleClick(product.id)}
        className=" flex items-center justify-center overflow-hidden relative mb-[6rem]"
      >
        <img
          src={product.image}
          alt=""
          className=" w-[287.5px] h-[348.83px] object-cover "
        />
        <div className="absolute bottom-[-2rem] text-white flex items-center text-[13px] group-hover:bottom-0 transition-all ease-in duration-300">
          <div className="quick__look bg-black p-[.12rem] px-5">QUICK LOOK</div>
          <div
            // onClick={() => setLike((l) => (l === id ? true : false))}
            className="like bg-[grey] p-[.322rem]"
          >
            {like ? <FaHeart /> : <IoCheckmarkOutline />}
          </div>
        </div>
      </div>
      <div className=" absolute top-[23rem] flex flex-col justify-center items-center group overflow-hidden">
        <div className="font-semibold tracking-[.1rem] text-[.8rem]">
          {product.name}
        </div>
        <div className=" flex -left-[6.5rem] overflow-hidden relative group-hover:left-[3.1rem] justify-center transit gap-20 ">
          <span
            onClick={() => addToCart(product)}
            className=" tracking-[.1rem] text-[#999] text-[.8rem] "
          >
            ADD TO CART
          </span>
          <span className=" right-[3.3rem]  text-[#999] font-sans">
            ${product.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;