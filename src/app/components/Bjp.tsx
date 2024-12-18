'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Bjp() {
  return (
    <div className="h-[450px] md:h-[800px]">
      <Swiper
        direction={'vertical'} 
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000, // Changed to 10 seconds (10000ms)
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="h-full"
      >

        <SwiperSlide>
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            >
              <source
                src="/images/slider/videoplayback.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            
          <img 
            src="/images/slider/slider-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider/slider-2.avif" 
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
