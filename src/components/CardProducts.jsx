import "./CardProducts.css"
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export function CardProducts({imagem,text,price}) {
    return(
        <div className="CardProducts">
            <div className="image">
                <img src={imagem} alt="" />
                {/* <CiHeart className="icon" ></CiHeart> */}
                {/* <FaHeart></FaHeart> */}
                <FaRegHeart></FaRegHeart>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta non, rem perspiciatis magni obcaecati facilis ullam libero maxime fugiat temporibus id qui nulla harum dignissimos! Sapiente doloribus quia exercitationem itaque!</p> */}
                {/* <p>love</p> */}
            </div>
            <p className="name">{text}</p>
            <p className="price">${price}.00</p>
        </div>
    )
}