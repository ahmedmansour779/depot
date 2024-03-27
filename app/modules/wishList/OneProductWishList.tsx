import { ProductsTypes } from "@/app/types"
import Link from "next/link"
import AddToCartButton from "../Cart/AddToCartButton"
import DeleteWishlist from "./DeleteWishlist"
import QuickLook from "./QuickLook"

type typeProps = {
    product: ProductsTypes
}

export default function OneProductWishList(props: typeProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="md:flex items-center justify-between hidden">
                <div className="flex gap-4 items-center">
                    <DeleteWishlist product={props.product} />
                    <img height={75} width={75} src={props.product.image} alt="image" />
                    <Link href={`products/${props.product.id}`} className="font-semibold tracking-widest">
                        {
                            props.product.title.length >= +10 ?
                                props.product.title.slice(0, 10) + "..." :
                                props.product.title
                        }
                    </Link>
                    <QuickLook product={props.product} />
                </div>
                <div className="flex gap-8">
                    <div className="text-hover">
                        {props.product.price}$
                    </div>
                    <div className="text-hover">
                        {props.product.category}
                    </div>
                    <div>
                        <AddToCartButton product={props.product} />
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-col gap-4 px-4">
                <div className="">
                    <img src={props.product.image} alt="image" className="w-full" />
                </div>
                <Link href={`products/${props.product.id}`} className="font-semibold tracking-widest text-lg">
                    {
                        props.product.title.length >= +10 ?
                            props.product.title.slice(0, 10) + "..." :
                            props.product.title
                    }
                </Link>
                <div className="flex flex-col gap-2">
                    <QuickLook product={props.product} />
                    <div className="flex justify-between">
                        <span>{props.product.price}$</span>
                        <span>{props.product.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            Add to cart
                        </div>
                        <DeleteWishlist product={props.product} />
                    </div>
                </div>

            </div>
            <hr />
        </div>
    )
}
