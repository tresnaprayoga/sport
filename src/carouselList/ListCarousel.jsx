import React from 'react';
import ItemLCaorusel from './ItemCraousel';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CarouseList({ carousel }) {
  return (
    <div className='food-list-slider'>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
        {carousel.map((food, index) => (
          <SwiperSlide key={index}>
            <ItemLCaorusel image={food.image} title={food.title} author={food.author} showPlayButton={food.showPlayButton} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
