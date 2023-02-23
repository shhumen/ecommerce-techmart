import {AiOutlineUser, AiOutlineHeart, AiOutlineSearch, AiOutlineShopping} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Categories from "../../pages/home/components/categories/Categories";

const Navbar = () => {
    const products = useSelector(state => state.products.items)
    const [showBox, setShowBox] = useState(false)
    const [search, setSearch] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const cart = useSelector(state => state.cart)

    useEffect(() => {
        window.addEventListener('click', () => setIsOpen(false))
    }, [])

    const handleSearch = (e) => {
        if (e.trim().length !== 0) {
            setSearch(
                products?.filter((product) =>
                    product?.name?.toLowerCase()?.includes(e.toLowerCase())
                    || product?.category.slug?.toLowerCase().includes(e.toLowerCase())
                    || product?.price?.formatted_with_symbol?.toLowerCase()?.includes(e.toLowerCase())
                )?.slice(0, 4)
            )
        } else setSearch(null)
    }


    return (
        <div className='header'>
            <nav className='nav'>
                <div className="logo">
                    <Link to='/'><h3><span>Tech</span>Mart</h3></Link>
                </div>
                <div className="search_bar mobile">
                    <form>
                        <input type="text" placeholder="Search..." onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(true)
                        }}
                               onChange={(e) => handleSearch(e.target.value)}/>
                        <button><AiOutlineSearch/></button>
                    </form>
                    {isOpen && <div className="search-results">
                        <div className='res'>
                            <h4>Results</h4>
                            <button onClick={() => setSearch(null)}>Clear</button>
                        </div>
                        {search?.length > 0 ? (search.map((product) => (
                            <Link key={Math.random()} to={`/products/${product?.category.slug}/${product.id}`}>
                                <div className="img">
                                    <img src={product?.image} alt=""/>
                                </div>
                                <div className="details">
                                    <h2>{product?.name.substring(0, 40)}</h2>
                                    <p>{product?.price.formatted_with_symbol}</p>
                                </div>
                            </Link>
                        ))) : ("")
                        }
                        {
                            search?.length === 0
                            && <div className='no-res'>
                                <p>No search result</p>
                            </div>
                        }
                    </div>}
                </div>
                <div className="acc-fav-basket">
                    <div className='acc' onMouseOver={() => setShowBox(true)} onMouseLeave={() => setShowBox(false)}>
                        <Link><AiOutlineUser/></Link>
                        <div className={showBox ? 'sign-in-up' : "sign-in-up hide"}
                             onMouseLeave={() => setShowBox(false)}>
                            {/*<ul>*/}
                            <div><Link to="/sign-in">Sign In</Link></div>
                            <div><Link to="sign-up">Sign Up</Link></div>
                            {/*</ul>*/}
                        </div>
                    </div>
                    <div className='favorites'>
                        <Link><AiOutlineHeart/></Link>
                    </div>
                    <div className='basket'>
                        <span>{cart.cartTotalQty}</span>
                        <Link to='/cart'><AiOutlineShopping/></Link>
                    </div>
                </div>
            </nav>
            <Categories/>
        </div>
    )
}

export default Navbar