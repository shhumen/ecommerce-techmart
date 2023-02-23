import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../features/actions/actions";
import Product from "../../layouts/product/Product";
import Filters from "./filter/Filters";
import BreadCrumb from "../../layouts/breadcrumb/BreadCrumb";
// import product from "../../layouts/product/Product";

const Products = () => {
    const params = useParams()
    const [chosenBrand, setChosenBrand] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(false)
    const [items, setItems] = useState([])
    const products = useSelector(state => state.products.items)
    const dispatch = useDispatch()


    useEffect(() => {
        fetchProductsByCategory(params.category)
        dispatch(fetchProducts())
        fetchProducts()
    }, [dispatch, params])

    useEffect(() => {
        filterProducts(items, chosenBrand)
    }, [chosenBrand, items])


    const fetchProductsByCategory = (category) => {
        const categoryItems = products.filter((item) => item.category.slug === category)
        if (categoryItems.length === 0) {
            setItems(products)
        } else {
            setItems(categoryItems)

        }

    }

    const filterProducts = (items, choseCategory) => {
        if (choseCategory.length > 0) {
            setFilteredProducts(
                items.filter(
                    product => chosenBrand.includes(product.brand)
                )
            )
        } else setFilteredProducts(false)
    }


    return (
        <div className='products'>
            <BreadCrumb product={false} brand={chosenBrand}/>

            <div className='products-container'>
                <Filters
                    category={params.category}
                    setChosenBrand={setChosenBrand}
                    chosenBrand={chosenBrand}
                    // filterProducts={filterProducts}
                    products={items}
                />

                <div className='products'>

                    {filteredProducts ?
                        filteredProducts?.map((product) => (
                            <Product
                                product={product}
                                id={product?.id}
                                category={params.category}
                                key={Math.random()}
                                name={product?.name}
                                img={product?.image}
                                price={product?.price?.formatted_with_symbol}
                            />
                        ))
                        : items?.map((product) => (
                            <Product
                                product={product}
                                id={product?.id}
                                category={params.category}
                                key={Math.random()}
                                name={product?.name}
                                img={product?.image}
                                price={product?.price?.formatted_with_symbol}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Products