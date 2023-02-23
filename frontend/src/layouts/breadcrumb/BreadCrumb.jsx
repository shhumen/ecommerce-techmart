import {Link, useParams} from "react-router-dom";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const BreadCrumb = ({product}) => {
    const params = useParams()
    return (
        <div className='breadcrumb'>
            <p>
                <Link to='/'>Home page</Link>
                <MdOutlineKeyboardArrowRight/>
                {params.category && (

                    <Link to={`/products/${params.category}`}>
                        {params.category}
                    </Link>
                )}
                {
                    params.id ?
                        <Link to={`/products/${params.category}/${product.id}`} className="prodName">
                            <MdOutlineKeyboardArrowRight/> {product.name}
                        </Link> :
                       <Link><MdOutlineKeyboardArrowRight/> All</Link>
                }

            </p>
        </div>

    )
}

export default BreadCrumb