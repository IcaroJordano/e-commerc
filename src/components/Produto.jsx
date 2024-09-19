import { useState } from 'react'
import { useEffect } from 'react'
import { CardProducts } from './CardProducts'
import './Produto.css'

function Produto() {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=70").then((res)=>res.json()).then((date)=>{
        console.log(date[2]) 
      setProduct([date[1],date[2],date[3],date[4],date[5],date[6],date[49],date[19],date[9]])
      // console.log(product)
    //   console.log((product[0]).images)
    } 
      )
    .catch((erro)=>console.log(erro))
},[])
  return (
    <div className='content'>
        {/* <CardProducts price={1} text={1} imagem={1}></CardProducts> */}
        {product.map((item)=>(
          <CardProducts price={item.price} text={item.title} imagem={item.images}></CardProducts>
        
        ))}
        {/* <CardProducts price={product[0].price} text={product[0].title} imagem={product[0].images}></CardProducts>
        <CardProducts price={product[1].price} text={product[1].title} imagem={product[1].images}></CardProducts>
        <CardProducts price={product[2].price} text={product[2].title} imagem={product[2].images}></CardProducts>
        <CardProducts price={product[3].price} text={product[3].title} imagem={product[3].images}></CardProducts>
        <CardProducts price={product[4].price} text={product[4].title} imagem={product[4].images}></CardProducts>
        <CardProducts price={product[5].price} text={product[5].title} imagem={product[5].images}></CardProducts>
        <CardProducts price={product[6].price} text={product[6].title} imagem={product[6].images}></CardProducts>
        <CardProducts price={product[7].price} text={product[7].title} imagem={product[7].images}></CardProducts>
        <CardProducts price={product[8].price} text={product[8].title} imagem={product[8].images}></CardProducts> */}
    </div>
  )
}

export default Produto
