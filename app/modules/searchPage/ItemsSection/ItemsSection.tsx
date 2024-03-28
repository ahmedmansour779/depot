"use client";

import { ProductsTypes } from "@/app/types";
import { useEffect, useState } from "react";
import ProductCart from "../../ProductCart";

export type ItemsSectionProps = {
  searchValue: string
};
export default function ItemsSection(props: ItemsSectionProps) {
  const [products, setProducts] = useState<ProductsTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://depot-data.onrender.com/products?q=${props.searchValue}`;
        const response = await fetch(url);
        const data: ProductsTypes[] = await response.json();
        setProducts(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  p-6 justify-stretch gap-8">
      {
        products.length > 0 ?
          products.map((product) => {
            return (
              <ProductCart product={product} isRating={false} />
            )
          }) : null
      }
    </div>
  );
}
