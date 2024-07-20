import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { login, signUp } from "../../../../firebase";

const Login = ({ setShowLogin }) => {
    const [loginState, setLoginState] = useState("REGISTER");
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_auth = async () => {
        if (loginState === "LOGIN") {
            await login(email, password);
        } else {
            await signUp(name, email, password);
        }
    };

    const authUser = () => {
        setIsLoading(true);
        setTimeout(() => {
            user_auth();
        }, 3000);
    };

    const loginContainerRef = useRef();
    let loginRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if (!loginRef.current.contains(e.target)) {
                loginContainerRef.current.classList.add("animate-ping");
                setTimeout(() => {
                    setShowLogin(false);
                }, 800);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <div
            ref={loginContainerRef}
            className=" fixed top-0 bg-slate-950/30 min-h-[100vh] w-full  z-[50] items-center justify-center pt-[6.04rem]"
        >
            <div ref={loginRef} className="bg-white w-[300px] h-fit m-auto">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setLoginState("LOGIN")}
                        className={` p-3 w-[50%] ${
                            loginState === "LOGIN" && "bg-slate-900/5"
                        }`}
                    >
                        LOGIN
                    </button>
                    <button
                        onClick={() => setLoginState("REGISTER")}
                        className={` p-3 w-[50%] ${
                            loginState === "REGISTER" && "bg-slate-900/5"
                        }`}
                    >
                        REGISTER
                    </button>
                </div>
                <div className=" p-[30px] flex flex-col gap-3">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        action=""
                    >
                        <div className=" flex flex-col gap-3 font-thin">
                            {loginState === "REGISTER" && (
                                <input
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    type="text"
                                    className=" outline-0 text-[#909090] p-3 border w-[100%] text-[13px]"
                                    placeholder="User Name"
                                />
                            )}
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                className=" outline-0 text-[#909090] p-3 border w-[100%] text-[13px]"
                                placeholder="Email"
                            />
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                                className=" outline-0 text-[#909090] p-3 border w-[100%] text-[13px]"
                                placeholder="Password"
                            />
                            {loginState === "REGISTER" && (
                                <input
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    type="password"
                                    className=" outline-0 text-[#909090] p-3 border w-[100%] text-[13px]"
                                    placeholder="Repeat Password"
                                />
                            )}
                        </div>
                        {loginState === "REGISTER" && (
                            <div className="text-[#808080] font-thin">
                                Your personal data will be used to support your
                                experience throughout this website, to manage
                                access to your account, and for other purposes
                                described in our{" "}
                                <span className=" text-black">
                                    privacy policy.
                                </span>
                            </div>
                        )}
                        <div className="text-white tracking-[.15em] font-bold text-[12px]">
                            {isLoading ? (
                                <button className="h-12 pl-[ 36px] bg-[#080808] w-full flex items-center justify-center">
                                    <AiOutlineLoading className="animate-spin" />
                                </button>
                            ) : (
                                <button
                                    onClick={authUser}
                                    className="h-12 pl-[ 36px] bg-[#080808] w-full flex items-center justify-center"
                                >
                                    {loginState === "REGISTER"
                                        ? "REGISTER"
                                        : "LOGIN"}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
