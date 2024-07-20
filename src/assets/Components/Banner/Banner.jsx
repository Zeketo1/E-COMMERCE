import React, { useEffect, useState } from "react";
import { slider } from "../../utils/slider";
import { motion } from "framer-motion";

const Banner = () => {
    const [banner, setBanner] = useState(0);

    const sliderLineStyle = "w-[80px] rounded-sm h-[3px] bg-black transit z-[60]";

    const [lineCond, setLineCond] = useState(0);

    const nextSlide = () => {
        setInterval(() => {
            setBanner(banner === slider.length - 1 ? 0 : banner + 1);
            // setLineCond(lineCond === 2 ? 0 : lineCond + 1 );
        }, 4000);
    };

    useEffect(() => {
        setBanner(0);
        // setLineCond(0);
    }, []);

    useEffect(() => {
        nextSlide();
    }, [banner]);

    const container = (x, delay) => ({
        hidden: { x: x, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay },
        },
    });

    const sliderNum = ["01", "02", "03"];

    return (
        <div className="relative flex justify-center mb-[5rem]">
            <div className="absolute top-[40%] left-6 flex flex-col gap-4">
                {sliderNum.map((item, i) => (
                    <div key={i} className="flex items-center gap-1">
                        <div>{item}</div>
                        <div
                            className={
                                lineCond === i
                                    ? sliderLineStyle
                                    : "w-[50px] rounded-sm h-[3px] bg-black transit"
                            }
                        ></div>
                    </div>
                ))}
                {/* <div className={sliderNum}>
                    <div>02</div>
                    <div className="w-20 rounded-sm h-[3px] bg-black"></div>
                </div>
                <div className={sliderNum}>
                    <div>03</div>
                    <div className="w-20 rounded-sm h-[3px] bg-black"></div>
                </div> */}
            </div>
            <div className="bg-[#f3f3f3] h-[38rem] w-[90%] flex items-center p-16 overflow-hidden justify-center z-30">
                {slider.map(
                    ({ sliderHeader, quote, image, style, initial, end }, i) =>
                        banner === i && (
                            <div
                                key={i}
                                className=" flex items-center relative"
                            >
                                <div className="text w-[40%] relative -bottom-40">
                                    <motion.h1
                                        variants={container(100, 1)}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-3xl font-medium tracking-[.4rem] text-gray-800 mb-2"
                                    >
                                        {sliderHeader}.
                                    </motion.h1>
                                    <motion.p
                                        variants={container(100, 1.2)}
                                        initial="hidden"
                                        animate="visible"
                                        className=" text-gray-600 text-[1.1rem] font-[340]"
                                    >
                                        {quote}.
                                    </motion.p>
                                </div>
                                <div className="imgSlider w-[70%] relative left-44 flex">
                                    <motion.img
                                        initial={{ y: initial }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.5,
                                        }}
                                        animate={{ y: end }}
                                        className={style ? style : style[0]}
                                        src={image[0]}
                                        alt=""
                                    />
                                    {image[1] && (
                                        <motion.img
                                            initial={{ y: initial }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 1.6,
                                            }}
                                            animate={{ y: -3 }}
                                            className={style[1]}
                                            src={image[1]}
                                            alt=""
                                        />
                                    )}
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Banner;
