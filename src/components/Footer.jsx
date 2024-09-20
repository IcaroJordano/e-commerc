import "./Footer.css"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import image from '../images/Atlantic-black.svg'

import { BottomCategorys } from './BottomCategorys'

export function Footer() {
    return (
        <footer className="footer">
            <BottomCategorys className="terms" ></BottomCategorys>
            <div className="bottom">
                <p>Atlantic&copy;2024</p>
                <div className="logos">
                    <FaGithub></FaGithub>
                    <FaLinkedin></FaLinkedin>
                    <FaInstagramSquare></FaInstagramSquare>
                    <FaDiscord></FaDiscord>
                </div>
            </div>    
        </footer>
    )
}