import Details from "./components/details/Details";
import {useSelector} from "react-redux";

const ProductPage = () => {
    const product = useSelector(state => state.productDetails.productDetails)
    console.log(product)
    return (
        <div className='product-page'>
            {/*<BreadCrumb/>*/}
            <Details/>
            <div>{product.name}</div>
        </div>
    )
}

export default ProductPage