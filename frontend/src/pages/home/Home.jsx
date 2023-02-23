import Hero from "./components/hero/Hero";
import CategorizedProducts from "./components/categorizedProducts/CategorizedProducts";
import {useSelector} from "react-redux";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import AdsSection from "./components/adsSection/AdsSection";
import Categories from "./components/categories/Categories";

const Home = () => {
    const products = useSelector(state => state.products.items)
    const categorizedByCategory = (array, category) => {
        return array.filter((product) => product.category.slug === category)
    }
    const categorizedByNew = (array) => {
        return array.filter((product) => product.new === true)
    }
    const categorizedByFeatured = (array) => {
        return array.filter((product) => product.featured === true)
    }
    return (
        <div className='home'>
            {/*<Categories/>*/}
            <Hero/>
            <CategorizedProducts
                products={products && categorizedByFeatured(products).slice(0, 4)}
                slug="phone" status="featured" category="Featured Products"/>
            <Banner/>
            <CategorizedProducts
                products={products && categorizedByCategory(products, "notebook").slice(0, 4)}
                slug="notebooks" status='new' category="New Notebooks"/>
            <Services/>
            <CategorizedProducts
                products={(products && categorizedByCategory(products, "game-consoles")) || (categorizedByNew(products))}
                slug="game-consoles" category="Game Consoles"/>
            <AdsSection/>
        </div>
    )

}

export default Home