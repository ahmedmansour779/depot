
import AddToCart from "@/app/modules/AddToCart";
import Footer from "@/app/modules/Footer";
import ProductCart from "@/app/modules/ProductCart";
import { ProductsTypes } from "@/app/types";
import { IconHeart } from "@tabler/icons-react";
import Details from "./Details";

const ratingLength = [1, 2, 3, 4, 5]

export default async function page(props: { params: any }) {
    const productId = props.params.productID

    const data = await fetch(`https://depot-data.onrender.com/products/${productId}`)
    const product = await data.json()

    const data2 = await fetch(`https://depot-data.onrender.com/products`)
    const products: ProductsTypes[] = await data2.json()

    return (
        <>
            <div className="wrapper">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-20 my-8 ">
                    <div className="p-4 flex flex-row justify-center">
                        <img src={product.image} alt={product.title} className="h-auto sm:h-[30rem]" />
                    </div>
                    <div >
                        <div className="flex flex-col gap-2 mb-12">
                            <h1 className="text-xl text-black">{product.title}</h1>
                            <p className="text-lg text-black">${product.price}</p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-1 mb-5">
                                {ratingLength.map((rate) => {
                                    return (
                                        <svg key={rate} className={`w-4 h-4 ${rate <= product.rating.rate ? "text-yellow-300" : "text-gray-200"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    )
                                })}
                                <div className="text-sm text-hover ml-8">
                                    ({product.rating.count} CUSTOMER REVIEW)
                                </div>
                            </div>
                        </div>
                        <div className="text-hover">{product.description}</div>
                        <AddToCart />
                        <button className="flex flex-row items-center gap-4 mt-4 mb-14"><IconHeart style={{ display: "inline" }} size={18} /> ADD TO WISHLIST</button>
                        <div className="text-sm">
                            <div>SKU: 005</div>
                            <div>Categories:<span className="text-hover"> Basics, Furniture, Home Decor</span></div>
                            <div>Tags:<span className="text-hover"> Decoration, Modern</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <Details titleDetails={product.title} descriptionDetails={product.description} ratingDetails={product.rating.rate} />
                </div>
                <hr />
                <div>
                    <p className="text-hover text-sm font-bold" style={{ letterSpacing: "2px" }}>RELATED PRODUCTS</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-12 py-12 mx-auto">
                        {
                            products.map((product) => {
                                return (
                                    <ProductCart product={product} key={product.id} isRating={true} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
