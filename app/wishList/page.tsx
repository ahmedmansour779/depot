import Footer from "../modules/Footer";
import ProductsWishList from "../modules/wishList/ProductsWishList";
import TitleImagePageWishList from "../modules/wishList/TitleImagePageWishList";

export default function page() {
    return (
        <>
            <TitleImagePageWishList />
            <ProductsWishList />
            <Footer />
        </>
    )
}
