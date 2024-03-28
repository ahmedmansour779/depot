import SearchInputSection from "@/app/modules/searchPage/SearchInputSection";
import TitleSearchPage from "@/app/modules/searchPage/TitleSearchPage";

export default function page(props: { params: any }) {
    return (
        <div>
            <TitleSearchPage params={props.params.items} />
            <SearchInputSection />
        </div>
    )
}
