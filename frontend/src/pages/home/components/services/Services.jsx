import {FiThumbsUp} from "react-icons/fi";
import {MdOutlineVerifiedUser} from "react-icons/md";
import {TbTruckDelivery} from "react-icons/tb";

const Services = () => {
    const services = [
        {
            icon: <FiThumbsUp/>,
            title: "100% satisfaction",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }, {
            icon: <TbTruckDelivery/>,
            title: "fast delivery",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }, {
            icon: <MdOutlineVerifiedUser/>,
            title: "guarantee",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
    ]
    return (

        <div className="services">
            {
                services.map(service => (
                    <div className="service" key={Math.random()}>
                        <div className="icon">{service.icon}</div>
                        <div className="desc">
                            <h4>{service.title}</h4>
                            <span>{service.desc}</span>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Services