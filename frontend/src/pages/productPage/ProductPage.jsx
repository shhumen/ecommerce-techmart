import BreadCrumb from "../../layouts/breadcrumb/BreadCrumb";
import Details from "./components/details/Details";
import ImageSlider from "./components/imgSilder/ImageSlider";
import {useSelector} from "react-redux";

const ProductPage = () => {
    const product = useSelector(state => state.productDetails.productDetails)
    console.log(product)
    return (
        <div className='product-page'>
            {/*<BreadCrumb/>*/}
            <ImageSlider/>
            <Details/>
            <div>{product.name}</div>
        </div>
    )
}

export default ProductPage