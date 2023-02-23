import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";

const EmptyCart = () => {
    return (
        <div className='cart-empty'>
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
                <Link to="/">
                    <AiOutlineArrowLeft/>
                    <span>Start your shopping</span>
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart