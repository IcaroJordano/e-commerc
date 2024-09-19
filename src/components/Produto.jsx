import { useState } from 'react'
import { useEffect } from 'react'
import { CardProducts } from './CardProducts'
import './Produto.css'

function Produto() {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10").then((res)=>res.json()).then((date)=>{
        console.log(date[3]) 
      setProduct([date[1],date[4]])
      console.log(product)
    //   console.log((product[0]).images)
    } 
      )
    .catch((erro)=>console.log(erro))
},[])
  return (
    <div className='content'>
        {/* <CardProducts price={1} text={1} imagem={1}></CardProducts> */}
        <CardProducts price={product[0].price} text={product[0].title} imagem={product[0].images}></CardProducts>
        <CardProducts price={product[1].price} text={product[1].title} imagem={product[1].images}></CardProducts>
        {/* <CardProducts price={product[1].price} text={product[1].title} imagem={product[1].images}></CardProducts>
        <CardProducts price={product[2].price} text={product[2].title} imagem={product[2].images}></CardProducts> */}
    </div>
  )
}

export default Produto
