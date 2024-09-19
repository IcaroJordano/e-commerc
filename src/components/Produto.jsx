import { useState } from 'react'
import { useEffect } from 'react'
import { CardProducts } from './CardProducts'
import './Produto.css'

function Produto() {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=70").then((res)=>res.json()).then((date)=>{
        console.log(date[2]) 
        let list=[]
        for (let i=0;i<=9;i++){
          list.push(date[i])
        }
        setProduct(list)}
    
      )
    .catch((erro)=>console.log(erro))
},[])
  return (
    <div className='content'>
        {product.map((item)=>(
          <CardProducts price={item.price} text={item.title} imagem={item.images}></CardProducts>
        
        ))}
    </div>
  )
}

export default Produto
