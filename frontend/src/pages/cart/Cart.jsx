import {useSelector} from "react-redux";
import EmptyCart from "./emptyCart/EmptyCart";
import CartProduct from "./cartProduct/CartProduct";

const Cart = () => {
    const cart = useSelector(state => state.cart.cartItems)
    return (
        <div className='cart-container'>
            <h2>Shopping Cart</h2>
            {
                cart.length === 0 ? (<EmptyCart/>) : (<CartProduct/>)
            }
        </div>
    )
}

export default Cart