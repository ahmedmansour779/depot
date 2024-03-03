"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TitleCartPage from "../modules/Cart/TitleCartPage";
import CartEmpty from "../modules/Cart/cartPage/CartEmpty";
import CartTotalSection from "../modules/Cart/cartPage/CartTotalSection";
import ShoppingCartSection from "../modules/Cart/cartPage/ShoppingCartSection/ShoppingCartSection";
import Footer from "../modules/Footer";
import { RootState } from "../types";

export default function page() {
    const { id, isLoggedIn, cartEvent } = useSelector((state: RootState) => state.user)
    const [data, setData] = useState([])

    useEffect(() => {
        const handelData = async () => {
            try {
                const url = `https://depot-data.onrender.com/users/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setData(data.cart)
            } catch {
                console.log("error");
            }
        }
        isLoggedIn && handelData()
    }, [id, cartEvent])

    return (
        <>
            <TitleCartPage />
            {
                data.length > 0 ?
                    <div className="container mx-auto flex bigTablet:flex-row flex-col gap-8">
                        <ShoppingCartSection />
                        <CartTotalSection />
                    </div> :
                    <CartEmpty />
            }

            <Footer />
        </>
    )
}
