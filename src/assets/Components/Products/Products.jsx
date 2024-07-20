import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { products } from "../../utils/products";
import { IoIosCheckmark, IoMdArrowDropdown } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import ProductCard from "./ProductCard";

const Products = () => {
    const filterLinks = [
        "ALL",
        "HOME DECOR",
        "LIGHTING",
        "DECORATION",
        "VASES",
        "BASICS",
    ];

    return (
        <div className="flex justify-center mb-20">
            <div className="w-fit">
                <div className="flex justify-between mx-20 text-[12px] mb-10 ">
                    <ul className="flex gap-10  font-semibold tracking-[.1em] opacity-60">
                        {filterLinks.map((link, i) => (
                            <li key={i}>{link}</li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-1 ">
                        <p className="tracking-[0.1rem]">FILTER</p>
                        <IoMdArrowDropdown />
                    </div>
                </div>
                <div className="mx-20">
                    <div className="grid grid-cols-4 gap-10 overflow-hidden">
                        {products.map((product, i) => (
                            <ProductCard product={product} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;

// const [data, setData] = useState([]);
// useEffect(() => {
//     const getProducts = async () => {
//         const res = await axios.get(apiResource);
//         setData(res.data);
//     };

//     getProducts();
// }, []);

// const { data } = useQuery({
//     queryKey: ["products"],
//     queryFn: async () => {
//         const res = await axios.get(apiResource);
//         const Products = await res.data;
//         return Products;
//     },
// });
