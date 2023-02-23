import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {HiBars3CenterLeft} from "react-icons/hi2";
import {useState} from "react";
import {VscClose} from "react-icons/vsc";

const Categories = () => {
    const categories = useSelector(state => state.categories.categories)
    const [openCat, setOpenCat] = useState(true)

    return (
        <div className="categories">
            <button className='mobile-menu-btn' onClick={() => setOpenCat(!openCat)}> {openCat ? <HiBars3CenterLeft/> : <VscClose/>}</button>
            <ul className={openCat ? 'close' : 'open'}>
                {
                    categories.map(category => (
                        <Link to={`/products/${category}`} key={Math.random()}>
                            <li>
                                {category}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories



