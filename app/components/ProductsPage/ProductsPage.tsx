import Filter from "./Filter";
import Products from "./Products";

export default function ProductsPage() {
    return (
        <div>
            <div className="flex flex-row justify-between flex-wrap gap-8 py-6">
                <div className="flex flex-row gap-4 text-sm text-hover flex-wrap">
                    <a href="#" className="hover:text-primary">ALL</a>
                    <a href="#" className="hover:text-primary">HOME DECOR</a>
                    <a href="#" className="hover:text-primary">LIGHTING</a>
                    <a href="#" className="hover:text-primary">DECORATION</a>
                    <a href="#" className="hover:text-primary">VASES</a>
                    <a href="#" className="hover:text-primary">BASICS</a>
                </div>
                <Filter />
            </div>
            <Products />
        </div>
    )
}
