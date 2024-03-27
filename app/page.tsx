import Footer from "./modules/Footer";
import ProductsPage from "./modules/ProductsPage";
import Hero from "./modules/hero/Hero";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <hr />
        <ProductsPage />
      </div>
      <Footer />
    </>
  )
}
