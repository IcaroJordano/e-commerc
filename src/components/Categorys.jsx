import "./Categorys.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Categorys(){
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
      <SwiperSlide className='style slide'><div className="Card">1</div></SwiperSlide>
      <SwiperSlide className='style slide'><div className="Card">2</div></SwiperSlide>
      <SwiperSlide className='style slide'><div className="Card">3</div></SwiperSlide>
      <SwiperSlide className='style slide'><div className="Card">4</div></SwiperSlide>

    </Swiper>
    </div>
  );
};