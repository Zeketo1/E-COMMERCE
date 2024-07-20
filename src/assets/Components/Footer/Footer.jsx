import { Facebook, Instagram, X } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
    const linkHeader = [
        "CUSTOMER SERVICE",
        "COMPANY",
        "SOCIAL MEDIA",
        "PROFILE",
    ];

    const footerItems = [
        "Help & Contact Us",
        "Returns & Refunds",
        "Online Stores",
        "Terms & Conditions",
    ];

    const footerItems2 = [
        "What We Do",
        "Available Services",
        "Latest Posts",
        "FAQs",
    ];

    const footerItems3 = ["Twitter", "Instagram", "Tumblr", "Pinterest"];

    const footerItems4 = [
        "My Account",
        "Checkout",
        "Order Tracking",
        "Help & Support",
    ];

    return (
        <>
            <div className="bg-black text-white px-9">
                <div className="flex justify-around items-center h-[24rem] px-9">
                    <div className="h-fit w-48 flex flex-col items-start">
                        <h1 className="mb-6 tracking-[.1rem]">
                            {linkHeader[0]}
                        </h1>
                        <motion.ul
                            className="gap-2 flex flex-col"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { duration: 0.5 },
                            }}
                        >
                            {footerItems.map((link, i) => (
                                <Link
                                    className="opacity-70 text-[14px]"
                                    key={i}
                                >
                                    {link}
                                </Link>
                            ))}
                        </motion.ul>
                    </div>
                    <div className="h-fit w-40 flex flex-col items-start">
                        <h1 className="mb-6 tracking-[.1rem]">
                            {linkHeader[1]}
                        </h1>
                        <motion.ul
                            className="gap-2 flex flex-col"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { duration: 1 },
                            }}
                        >
                            {footerItems2.map((link, i) => (
                                <Link
                                    className="opacity-70 text-[14px]"
                                    key={i}
                                >
                                    {link}
                                </Link>
                            ))}
                        </motion.ul>
                    </div>
                    <div className="h-fit w-40 flex flex-col items-start">
                        <h1 className="mb-6 tracking-[.1rem]">
                            {linkHeader[2]}
                        </h1>
                        <motion.ul
                            className="gap-2 flex flex-col"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { duration: 1 },
                            }}
                        >
                            {footerItems3.map((link, i) => (
                                <Link
                                    className="opacity-70 text-[14px]"
                                    key={i}
                                >
                                    {link}
                                </Link>
                            ))}
                        </motion.ul>
                    </div>
                    <div className="h-fit w-40 flex flex-col items-start">
                        <h1 className="mb-6 tracking-[.1rem]">
                            {linkHeader[3]}
                        </h1>
                        <motion.ul
                            className="gap-2 flex flex-col"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { duration: 1 },
                            }}
                        >
                            {footerItems4.map((link, i) => (
                                <Link
                                    className="opacity-70 text-[14px]"
                                    key={i}
                                >
                                    {link}
                                </Link>
                            ))}
                        </motion.ul>
                    </div>
                </div>
                <div className="w-full flex justify-between px-[8rem] py-4 text-[12px] border-y-[#ffffffbd] border-t">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{
                            x: 1,
                            opacity: 1,
                            transition: { duration: 1 },
                        }}
                        animate={"bounce"}
                        className=""
                    >
                        &copy; 2021 Qode Interactive, All Rights Reserved
                    </motion.div>
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        whileInView={{
                            y: 1,
                            opacity: 1,
                            transition: { duration: 1 },
                        }}
                        animate={"bounce"}
                        className="flex justify-center gap-[1rem] items-center"
                    >
                        <div className="">Follow Us</div>
                        <FaXTwitter />
                        <FaInstagram />
                        <FaFacebook />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Footer;
