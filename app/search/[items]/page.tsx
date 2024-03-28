import Footer from "@/app/modules/Footer";
import ItemsSection from "@/app/modules/searchPage/ItemsSection";
import SearchInputSection from "@/app/modules/searchPage/SearchInputSection";
import TitleSearchPage from "@/app/modules/searchPage/TitleSearchPage";

export default function page(props: { params: any }) {
    return (
        <div>
            <TitleSearchPage params={props.params.items} />
            <SearchInputSection />
            <ItemsSection searchValue={props.params.items} />
            <Footer />
        </div>
    )
}
