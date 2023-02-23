import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <img className='banner-img'
                     src='https://res.cloudinary.com/dgnkjztis/image/upload/v1674412073/techbomb/banner1_upkckl.png'
                     alt="banner"/>
                <div className="desc">
                    <button>Buy</button>
                    <Link><span>Learn More</span><IoIosArrowForward/> </Link>
                </div>

            </div>
            <div className="ads">
                <div className="banner-image">
                    <img src="https://res.cloudinary.com/dgnkjztis/image/upload/v1674412342/techbomb/ads1_sip9wn.png"
                         alt="ads"/>
                </div>
                <div className="banner-image">
                    <img src="https://res.cloudinary.com/dgnkjztis/image/upload/v1674412342/techbomb/adds2_i7sezm.png"
                         alt="ads"/>
                </div>
                <div className="banner-image">
                    <img src="https://res.cloudinary.com/dgnkjztis/image/upload/v1674412346/techbomb/ads3_vkbmis.png"
                         alt="ads"/>

                </div>
            </div>
        </>

    )
}

export default Banner