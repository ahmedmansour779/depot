import { ProductsTypes } from "@/app/types"
import ProductCart from "../ProductCart"

export default async function Products() {
    const data = await fetch(`${process.env.REACT_APP_API}?limit=8`)

    const products: ProductsTypes[] = await data.json()

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  p-6 justify-stretch gap-8">
            {
                products.map((product) => {
                    return (
                        <ProductCart product={product} key={product.id} isRating={false} />
                    )
                })
            }
        </div>
    )
}
