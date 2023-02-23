import Product from "../../../../layouts/product/Product";
import arrayShuffle from "array-shuffle";

const CategorizedProducts = ({status, category, products, slug}) => {

    return (
        <div className='categorized-products'>
            <div className="cat-title">
                <h4>{category}</h4>
            </div>
            <div className="products">
                {arrayShuffle(products.map(product => (
                    <Product
                        product={product}
                        status={status}
                        key={Math.random()}
                        name={product?.name}
                        id={product?.id}
                        category={slug}
                        price={product?.price?.formatted_with_symbol}
                        img={product?.image}
                    />
                )))}
            </div>

        </div>

    )
}

export default CategorizedProducts
