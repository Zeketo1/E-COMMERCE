import { CloseOutlined, X, Instagram, Facebook } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { SideBarContext } from "../../../App";
import { motion } from "framer-motion";
import { sidebarData } from "../../utils/sidebarData";
import { FaInstagram } from "react-icons/fa";

const SideBar = () => {
    const { bar, setBar } = useContext(SideBarContext);

    return (
        <motion.div className={bar}>
            <div>
                <CloseOutlined
                    className="float-right text-white mb-5"
                    onClick={() => {
                        setBar(
                            "right-[-100%] bg-black min-h-[100vh] w-[38.5rem] top-0 fixed z-[60] transit p-12 flex flex-col text-white"
                        );
                    }}
                />
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-[0.80rem] leading-3 tracking-[0.1rem] font-medium text-center">
                    WELCOME
                </div>
                <div className="text-[25px] text-center opacity-60 font-thin">
                    Advertising is the way great brands get to be great brands.
                </div>
                <div className="flex justify-center mt-4">
                    <div className="gap-[6px] max-w-[25rem] grid grid-cols-4">
                        {sidebarData.map((image, i) => (
                            <div
                                className="h-24 w-24 relative group flex justify-center items-center cursor-pointer"
                                key={i}
                            >
                                <img
                                    className="h-24 w-24 transition-all duration-1000 group-hover:opacity-30"
                                    src={image}
                                    alt={image}
                                />
                                {/* <Instagram
                                    style={{ display: "none" }}
                                    className="absolute group-hover:block group-hover:animate-bounce"
                                /> */}
                                <FaInstagram className="hidden absolute group-hover:block group-hover:animate-[bounce_2s_ease-in-out_both] text-[25px] duration-1000 bottom-8" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative -bottom-52 text-center flex flex-col gap-8">
                    <div className="text-[13px] opacity-60 tracking-[0.2rem]">
                        WE ARE AWESOME FOLOW US
                    </div>
                    <div className="flex gap-4 justify-center">
                        <X /> <Instagram /> <Facebook />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SideBar;
