import "./Navbar.css"
import image from '../images/Atlantic-black.svg'
import { IoMenuOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

export function Navbar() {
    return(
        <div className="Navbar">
            <IoMenuOutline className="menu" />
            <img src={image} alt="" />
            <div className="add">
                <CiHeart></CiHeart>
                <IoCartOutline></IoCartOutline>
            </div>
        </div>
    )
}