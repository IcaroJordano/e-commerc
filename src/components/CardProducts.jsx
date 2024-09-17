import "./CardProducts.css"
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export function CardProducts() {
    return(
        <div className="CardProducts">
            <div className="image">
                <img src="https://iili.io/dR1Eyiv.jpg" alt="" />
                {/* <CiHeart className="icon" ></CiHeart> */}
                {/* <FaHeart></FaHeart> */}
                <FaRegHeart></FaRegHeart>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta non, rem perspiciatis magni obcaecati facilis ullam libero maxime fugiat temporibus id qui nulla harum dignissimos! Sapiente doloribus quia exercitationem itaque!</p> */}
                {/* <p>love</p> */}
            </div>
            <p className="name">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p className="price">$143.00</p>
        </div>
    )
}