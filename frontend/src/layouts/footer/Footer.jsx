import {Link} from "react-router-dom";
import {FaFacebookSquare} from "react-icons/fa";
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-logo">
                <Link to='/'><h3>TechMart</h3></Link>
            </div>
            <div className="footer-content">
                <div className="social-media">
                    <h4>Follow Us</h4>
                    <AiOutlineInstagram/>
                    <FaFacebookSquare/>
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                    <p>123-456-7890</p>
                    <p>human@gmail.com</p>
                </div>
                <div className="address">
                    <h4>Address</h4>
                    <p>9620 Lakewood Dr.<br/> Langhorne, PA 19047</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer