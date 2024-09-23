import "./Footer.css"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";
// import { BiLogoInstagramAlt } from "react-icons/bi";

import image from '../images/Atlantic-black.svg'

import { BottomCategorys } from './BottomCategorys'

export function Footer() {
    return (
        <footer className="footer">
            <BottomCategorys className="terms" ></BottomCategorys>
            {/* <div className="bottom"> */}
                <img src={image} alt="" />
                <p>&copy;2024 | Atlantic - Todos os direitos reservados</p>
                <div className="logos">
                    <FaGithub></FaGithub>
                    <FaLinkedin></FaLinkedin>
                    <FaInstagram></FaInstagram>
                    <FaDiscord></FaDiscord>
                </div>
            {/* </div>     */}
        </footer>
    )
}