"use client";

import { ProductsTypes, RootState, typeProduct } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCart from "../ProductCart";
import NotFoundProducts from "./NotFoundProducts";

type propsType = {
    typeProduct: typeProduct
}

export default function Products(props: propsType) {

    const [products, setProducts] = useState<ProductsTypes[]>([]);
    const valuePrice = useSelector((state: RootState) => state.filterPrice.value)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://depot-data.onrender.com/products/${props.typeProduct !== "" ? `?category=${props.typeProduct}` : ""}`;
                const response = await fetch(url);
                const data: ProductsTypes[] = await response.json();
                if (valuePrice === "all") {
                    setProducts(data);
                } else if (valuePrice === "0-10") {
                    setProducts(data.filter(product => product.price >= 0 && product.price <= 10));
                } else if (valuePrice === "10-20") {
                    setProducts(data.filter(product => product.price > 10 && product.price <= 20));
                } else if (valuePrice === "20-30") {
                    setProducts(data.filter(product => product.price > 20 && product.price <= 30));
                } else if (valuePrice === "30-40") {
                    setProducts(data.filter(product => product.price > 30 && product.price <= 40));
                } else if (valuePrice === "+40") {
                    setProducts(data.filter(product => product.price > 40));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [props.typeProduct, valuePrice]);



    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  p-6 justify-stretch gap-8">
            {
                products.length == 0 ?
                    <NotFoundProducts /> :
                    products.map((product) => {
                        return (
                            <ProductCart product={product} key={product.id} isRating={false} />
                        )
                    })
            }
        </div>
    )
}
