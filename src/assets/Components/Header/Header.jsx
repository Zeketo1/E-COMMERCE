import React, { useContext, useEffect, useRef, useState } from "react";
import { SideBarContext } from "../../../App";
import { useLocation } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import depotLogo from "/depot_logo.png";

import {
  SearchSharp,
  MenuSharp,
  FavoriteBorder,
  PersonOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContextProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../../../../firebase";

const Header = ({ setShowLogin }) => {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        document.getElementById("googleProfileImage").src = `${user.photoURL}`;
      } else {
        document.getElementById("googleProfileImage").src = { depotLogo };
      }
    });
  }, []);

  const profile = useRef();
  const showProfile = () => {
    profile.current.classList.remove("hidden");
  };
  const hideProfile = () => {
    profile.current.classList.add("hidden");
  };

  const { cartItems, getTotalPriceAmount } = useContext(CartContext);
  const { bar, setBar } = useContext(SideBarContext);
  const { pathname } = useLocation();
  console.log(pathname);

  const lists = [
    { link: "/", title: "HOME" },
    { link: "/shop", title: "SHOP" },
    { link: "/pages", title: "PAGES" },
    { link: "/elements", title: "ELEMENTS" },
  ];
  const navLeft = [
    { text: `CART (${getTotalPriceAmount()[0]})`, link: "/cart" },
    { icon: <FavoriteBorder />, text: "($0)" },
    { icon: <PersonOutline />, text: "LOGIN" },
    {
      icon: <SearchSharp className="rotate-90" />,
      text: (
        <MenuSharp
          className="cursor-pointer"
          onClick={() =>
            setBar(
              "right-0 bg-[#000] min-h-[100vh] w-[37.8rem] top-0 fixed z-[9999] transit flex flex-col justify-between"
            )
          }
        />
      ),
    },
  ];
  return (
    <>
      <div className=" flex justify-around items-center bg-black text-white sticky top-0 h-24 text-[12px] font-bold z-[999] backdrop-opacity-5 backdrop-invert bg-black/95 px-5">
        <ul className="md:flex hidden  gap-10 font-semibold tracking-[.1em] overflow-hidden">
          {lists.map(({ title, link }, i) => (
            <div key={i} className="group overflow-hidden">
              <Link
                to={link}
                className={link === pathname ? "text-[#fff]" : "text-[#999999]"}
              >
                {title}
              </Link>
              {/* <div className=" bg-black w-[80%] h-[348.2px] left-32 -top-[25rem] group-hover:top-[6rem] absolute  transit "></div> */}
            </div>
          ))}
        </ul>

        <h1 className="font-bold text-[25px] tracking-[0.5rem]">DUTO</h1>
        <ul className=" md:flex hidden gap-7 items-center w-fit">
          {navLeft.map(({ icon, text, link }, i) => (
            <Link
              to={link}
              key={i}
              className="font-sans flex items-center"
              onClick={() => i === 2 && setShowLogin(true)}
            >
              {icon && icon}
              {text && text}
            </Link>
          ))}
          <div className="cursor-pointer" onClick={showProfile}>
            <img
              id="googleProfileImage"
              src=""
              className="rounded-full h-7"
              alt=""
            />

            <div
              ref={profile}
              className=" hidden fixed bg-white shadow-sm h-[5rem] w-[10rem] right-0 top-24"
            >
              <LiaTimesSolid
                onClick={hideProfile}
                className=" text-black absolute top-2 right-0 text-[20px]"
              />
              <h1
                onClick={() => logout()}
                className="text-black  absolute flex items-center gap-3 top-8 left-14 cursor-pointer"
              >
                LOGOUT
                <BiLogOut />
              </h1>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;