import {useDispatch} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {fetchCategories} from "../../../features/actions/actions";
// import { AiOutlinePlus} from "react-icons/ai";

const Filters = ({category, setChosenBrand, chosenBrand, products}) => {

    const [toggle, setToggle] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    //brands from products
    const brands = products.map(product => product.brand)

    // handleCheck() for checkbox
    const handleCheck = (e) => {
        if (e.target.checked) {
            setChosenBrand([...chosenBrand, e.target.name])
        } else {
            setChosenBrand(chosenBrand.filter(brand => brand !== e.target.name))
        }
    }

    return (
        <div className='filter-container'>
            <div className="category">
                <h4>
                    {category}
                    {/*<button>*/}
                    {/*    <AiOutlinePlus/>*/}
                    {/*</button>*/}
                </h4>
                {
                    toggle && (
                        <div className="brands">
                            {[...new Set(brands)].map((brand) => {
                                return (
                                    <label className='brand' htmlFor="">
                                        <input type="checkbox" name={brand} onChange={handleCheck}/>
                                        {brand}
                                    </label>
                                )
                            })}
                        </div>
                    )
                }
            </div>
            <div className="price">
                <h4>
                    Price
                    {/*<button*/}
                    {/*    onClick={() => setToggle(!toggle)}>*/}
                    {/*    <AiOutlinePlus/>*/}
                    {/*</button>*/}
                </h4>
                <div className="price">
                    Price scroll
                </div>
            </div>
        </div>
    )
}

export default Filters


// let newProducts = products.reduce((acc, product) => {
//     let key = product.category.name// phone, notebook
//     if (!acc[key]) (acc[key]) = [];//{phone:[]   notebook :[]}
//     acc[key].push(product?.brand);
//     return acc
// }, {})
// const keys = Object.keys(newProducts)
// console.log(newProducts)
