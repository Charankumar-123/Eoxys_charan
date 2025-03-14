"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import autoplay module
import "swiper/css";
import Image from "next/image";

interface Client {
  id: number;
  imgPath: string;
  link: string;
}

interface SwipeableCarouselProps {
  clients: Client[];
}

const SwipeableCarousel: React.FC<SwipeableCarouselProps> = ({ clients }) => {
  if (!clients || clients.length === 0) {
    return <p>No clients available</p>;
  }

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={9} 
      spaceBetween={20} 
      loop={true} 
      autoplay={{ delay: 2000, disableOnInteraction: false }} 
      breakpoints={{
        320: { slidesPerView: 1 }, 
        640: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 }, 
      }}
      className="w-full"
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id} className="flex justify-center items-center">
          <a href={client.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={client.imgPath} 
            alt="Client Logo"
            width={150}
            height={100}
            className="object-contain mx-auto"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeableCarousel;
