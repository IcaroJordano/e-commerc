import { CardProducts } from "./CardProducts"
import "./Products.css"
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Products() {
    return (
        <section className="Products">
            <div className="Cards">
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
                <CardProducts></CardProducts>
            </div>
            <div className="mais">
                <p className="viewed" >Viewed 72 of 745 products</p>
                <button>LOAD MORE</button>
            </div>
        </section>
    )
}