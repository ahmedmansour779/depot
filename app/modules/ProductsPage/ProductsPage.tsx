"use client";

import { RootState, typeProduct } from "@/app/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import Products from "./Products";

export default function ProductsPage() {
    const [typeProduct, setTypeProduct] = useState<typeProduct>("")
    const { all, womenClothing, mensClothing, electronics, jewelery } = useSelector((state: RootState) => state.translations.translations)
    const lang = useSelector((state: RootState) => state.translations.language)

    return (
        <div style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <div className="flex flex-row md:justify-between justify-end flex-wrap gap-8 py-6">
                <div className="flex flex-row gap-4 text-sm text-hover flex-wrap">
                    <p className="hover:text-primary uppercase hover:cursor-pointer" onClick={() => setTypeProduct("")}>{all}</p>
                    <p className="hover:text-primary uppercase hover:cursor-pointer" onClick={() => setTypeProduct("women%27s%20clothing")}>{womenClothing}</p>
                    <p className="hover:text-primary uppercase hover:cursor-pointer" onClick={() => setTypeProduct("men%27s%20clothing")}>{mensClothing}</p>
                    <p className="hover:text-primary uppercase hover:cursor-pointer" onClick={() => setTypeProduct("electronics")}>{electronics}</p>
                    <p className="hover:text-primary uppercase hover:cursor-pointer" onClick={() => setTypeProduct("jewelery")}>{jewelery}</p>
                </div>
                <Filter />
            </div>
            <Products typeProduct={typeProduct} />
        </div>
    )
}
