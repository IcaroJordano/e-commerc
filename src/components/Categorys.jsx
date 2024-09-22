import "./Categorys.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CardCategorys } from "./CardCategorys";

export function Categorys(){
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
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>
      <SwiperSlide className='style slide'><CardCategorys></CardCategorys></SwiperSlide>

    </Swiper>
    </div>
  );
};