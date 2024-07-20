import Home from "./assets/Components/Home/Home";
import Footer from "./assets/Components/Footer/Footer";
import Login from "./assets/Components/Auth/Login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import SideBar from "./assets/Components/Header/SideBar";
import Header from "./assets/Components/Header/Header";
import NotFound from "./NotFound";
import CartContextProvider from "./assets/Components/Cart/CartContextProvider";
import Cart from "./assets/Components/Cart/Cart";
import ProductDetails from "./assets/Components/Products/ProductsDetails";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const SideBarContext = createContext();

function App() {
    const [bar, setBar] = useState(
        "right-[-100%] bg-black min-h-[100vh] w-[38.5rem] top-0 fixed z-[60] transit p-12 flex flex-col text-white"
    );

    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log(user);
                setTimeout(() => {
                    setShowLogin(false);
                }, 1000);
            }
        });
    }, []);

    return (
        <>
            <SideBarContext.Provider value={{ bar, setBar }}>
                <CartContextProvider>
                    <BrowserRouter>
                        <SideBar />
                        {showLogin ? <Login /> : undefined}
                        <Header setShowLogin={setShowLogin} />
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Cart />} path="/cart" />
                            <Route
                                element={<ProductDetails />}
                                path="/product/:id"
                            />
                            <Route element={<NotFound />} path="*" />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </CartContextProvider>
            </SideBarContext.Provider>
        </>
    );
}

export default App;
