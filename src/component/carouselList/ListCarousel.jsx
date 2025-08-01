import React from "react";
import ItemLCaorusel from "./ItemCraousel";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CarouseList({ carousel }) {
  return (
    <div className="food-list-slider">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0} // bisa juga diperkecil, misal 6
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
          0: { slidesPerView: 3 }, // tampil 2 di layar kecil
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {carousel.map((food, index) => (
          <SwiperSlide key={index}>
            <ItemLCaorusel
              image={food.image}
              title={food.title}
              author={food.author}
              showPlayButton={food.showPlayButton}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
