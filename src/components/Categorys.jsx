import "./Categorys.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useState } from 'react'
import { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CardCategorys } from "./CardCategorys";

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
      spaceBetween={5}
      slidesPerView={2.2}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        product.map((item)=>(
          <SwiperSlide className='style slide' ><CardCategorys className="Card" image={item}></CardCategorys></SwiperSlide>

        ))
      }
      {/* <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide> */}

    </Swiper>
    </div>
  );
};