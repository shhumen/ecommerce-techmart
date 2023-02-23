import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {removeFromCart, decreaseCart, addToCart, clearCart, getTotals} from "../../../features/cartSlice";
import {useEffect} from "react";

const CartProduct = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    return (
        <>
            <div className="titles">
                <h3 className='product-title'>Product</h3>
                <h3 className='price'>Price</h3>
                <h3 className='quantity'>Quantity</h3>
                <h3 className='total'>Total</h3>
            </div>
            <div className="cart-items">
                {
                    cart?.cartItems?.map((item) => {
                        const colorv = item.color_variants.find(item_ => item_.color === item.color)
                        console.log(colorv)
                        return (
                            <div className='cart-item' key={item?.id}>
                                <div className="cart-product">
                                    <Link to={`/products/${item?.category.slug}/${item?.id}`}>
                                        <img src={colorv.assets[0].url} alt=""/>
                                    </Link>
                                    <div>
                                        <h3>{item?.name.substring(0, 25)}</h3>
                                        <span>{item?.color}</span>
                                        <br/>
                                        <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                                    </div>
                                </div>
                                <div className="cart-product-price">${item?.price?.formatted}</div>
                                <div className="cart-quantity">
                                    <button onClick={() => dispatch(decreaseCart(item))}>-</button>
                                    <div className="count">{item?.cartQty}</div>
                                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                                </div>
                                <div className="cart-total-price">
                                    ${item?.price?.formatted * item?.cartQty}
                                </div>
                            </div>

                        )
                    })}
            </div>
            <div className="cart-summary">
                <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                <div className="cart-checkout">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span className="amount">${cart.cartTotalAmount}</span>
                    </div>
                    <p>Taxes and shipping calculated at checkout</p>
                    <button>Checkout</button>
                    <div className="continue-shopping">
                        <Link to='/'>
                            <AiOutlineArrowLeft/>
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct