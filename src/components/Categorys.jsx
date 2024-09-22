import "./Categorys.css"

import { useState } from 'react'
import { useEffect } from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Categorys(){

  const [product,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/categories").then((res)=>res.json()).then((date)=>{
        console.log(date) 
        let list=[]
        date.map((item)=>{
          console.table(item.image)
          list.push(item.image  )
        })
        setProduct(list)
      }
    
      )
    .catch((erro)=>console.log(erro))
},[])
  return (
    <div className="Categorys">

    <Swiper
    className="carroseu"
// install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        product.map((item)=>(
          <SwiperSlide className='style slide' style={{'background-color':'red'}} ><div className="Card" style={{'background-image':`url(${item})`}} >1</div></SwiperSlide>

        ))
      }
      {/* <SwiperSlide className='style slide'><div className="Card">2</div></SwiperSlide>
      <SwiperSlide className='style slide'><div className="Card">3</div></SwiperSlide>
      <SwiperSlide className='style slide'><div className="Card">4</div></SwiperSlide> */}

    </Swiper>
    </div>
  );
};