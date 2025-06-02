'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Slider {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
}

export default function Bjp() {
  const [sliders, setSliders] = useState<Slider[]>([]);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/v1/sliders');
        const data = await response.json();
        setSliders(data);
      } catch (error) {
        console.error('Error fetching sliders:', error);
      }
    };

    fetchSliders();
  }, []);

  return (
    <div className="h-[450px] md:h-[800px]">
      <Swiper
        direction={'vertical'} 
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="h-full"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider._id}>
            <div className="relative w-full h-full">
              <img 
                src={`http://localhost:3002${slider.imageUrl}`}
                alt={slider.title}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <h2 className="text-2xl font-bold">{slider.title}</h2>
                <p className="text-lg">{slider.subtitle}</p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
