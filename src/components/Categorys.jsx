import "./Categorys.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useMediaQuery } from "@uidotdev/usehooks";

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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [product,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/categories").then((res)=>res.json()).then((date)=>{
        console.log(date) 
        let list=[]
        for (let i=0; i<5;i++){
          list.push(date[i])
        }
        // let list=[]
        // for (let i=0;i<=19;i++){
        //   list.push(date[i])
        // }
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
      spaceBetween={4}
      // slidesPerView={2.2}
      slidesPerView={isSmallDevice ? "2.2" : "5"}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        product.map((item)=>(
          <SwiperSlide className='style slide' ><CardCategorys className="Card" image={item.image} name={item.name} ></CardCategorys></SwiperSlide>

        ))
      }      
      {/* {
        product.map((item)=>(
          <SwiperSlide className='style slide' ><CardCategorys className="Card" image={item.image} name={item.name} ></CardCategorys></SwiperSlide>

        ))
      } */}
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