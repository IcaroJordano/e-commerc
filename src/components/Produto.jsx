import { useState } from 'react'
import { useEffect } from 'react'
import { CardProducts } from './CardProducts'
import './Produto.css'

function Produto() {
  const [product,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/categories").then((res)=>res.json()).then((date)=>{
        console.log(date) 
        let list=[]
        date.map((item)=>{
          console.table(item.image)
          list.push(item.image)
        })
        setProduct(list)
      }
    
      )
    .catch((erro)=>console.log(erro))
},[])
  return (
    <div className='content'>
      {product.map((item)=>(
        <CardProducts  imagem={item}></CardProducts>))
      }
      <p className="viewed" >Viewed 72 of 745 products</p>
      <button>LOAD MORE</button>  
    </div>
  )
}

export default Produto
