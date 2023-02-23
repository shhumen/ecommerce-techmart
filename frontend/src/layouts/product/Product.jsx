import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useGetAllProductsQuery} from "../../features/productsApi";
import {addToCart} from "../../features/cartSlice";

const Product = ({id, category, product, name, img, price, status}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data, error, isLoading} = useGetAllProductsQuery()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate("/cart")
    }

    return (
        <div className='product'>
            {isLoading ? <p>Loading</p> : error ? <p>Error Occured</p> :
                (
                    <>
                        <span className={status === 'new' ? "new" : ""}>{status === 'new' ? `${status}` : ""}</span>
                        <h3>{name.substring(0, 25)}</h3>
                        <Link to={`/products/${category}/${id}`} target='_blank' className="img">
                            <img src={img} alt=""/>
                        </Link>
                        <div className="details">
                            <span>{category}</span>
                            <span>{price}</span>
                        </div>
                        <button onClick={() => {
                            handleAddToCart(product)
                        }}>add to cart
                        </button>
                    </>
                    // <Link to={`/products/${slug}/${id}`}>
                    // </Link>
                )
            }
        </div>
    )
}

export default Product


// const AccordionItem = (props) => {
//     const contentEl = useRef();
//     const { handleToggle, active, faq } = props;
//     const { header, id, text } = faq;
//
//     return (
//         <div className="rc-accordion-card">
//             <div className="rc-accordion-header">
//                 <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() =>
// handleToggle(id)}> <h5 className="rc-accordion-title">{header}</h5> <i className="fa fa-chevron-down
// rc-accordion-icon"></i> </div> </div> <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`}
// style={ active === id ? { height: contentEl.current.scrollHeight } : { height: "0px" } }> <div
// className="rc-accordion-body"> <p className='mb-0'>{text}</p> </div> </div> </div> ) }  const App = () => {  const
// [active, setActive] = useState(null);  const handleToggle = (index) => { if (active === index) { setActive(null); }
// else { setActive(index); } }  return ( <> <div className="container-fluid mt-5 mb-5"> <div className="row
// justify-content-center"> <div className="col-md-8 mt-2"> <div className="card"> <div className="card-body"> <h4
// className="form-heading mb-4 text-primary text-center mt-3">React Accordion</h4> {faqs.map((faq, index) => { return
// ( <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} /> ) }) } </div> </div> </div>
// </div> </div> </> ); };  ReactDOM.render(<App />, document.getElementById("root"));
