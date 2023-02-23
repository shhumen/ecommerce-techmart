import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {useNavigate} from "react-router-dom";
// import {heroImg} from './images/hero2.jpg'

const Hero = () => {
    const navigate = useNavigate()
    const mousewheel = {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
    }

    return (
        <div className='hero'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                loop={true}
                mousewheel={mousewheel}
                slidesPerView={"auto"}
                modules={[Autoplay, Mousewheel, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="ads-swiper"
            >
                <SwiperSlide>
                    <div className="hero-1">
                        <div className="hero-img">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-2">
                        <div className="hero-img">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-3">
                        <div className="hero-img">
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero

