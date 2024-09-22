import './CardCategorys.css'

import { MdShoppingBag } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

export function CardCategorys({image, name}) {
    return(
        <div className="CardCategorys" style={{'background-image':`url(${image})`}}>
            <h2>{name}</h2>
           <MdOutlineShoppingBag></MdOutlineShoppingBag>
        </div>
    )
}