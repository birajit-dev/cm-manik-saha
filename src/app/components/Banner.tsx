'use client';
import Slider from "react-slick";
import { useState, useEffect } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(true);

  // Switch to slider after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Slick carousel settings for image slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full hover:bg-white/70 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    ),
    prevArrow: (
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full hover:bg-white/70 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    appendDots: dots => (
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-700 cursor-pointer"></div>
    ),
  };

  return (
    <div className="relative">
      {/* Background Section */}
      <div className="relative h-[450px] md:h-[600px] overflow-hidden">
        {showVideo ? (
          <div className="relative w-full h-full">
            {/* Background Video */}
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
            {/* Video Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
              <button
                onClick={() => setShowVideo(false)}
                className="bg-white/50 px-4 py-2 rounded-full"
              >
                Switch to Slider
              </button>
            </div>
          </div>
        ) : (
          /* Background Image Slider */
          <div className="absolute inset-0 z-0">
            <Slider {...sliderSettings}>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83J74cxyLIvUmpaI1pXBa2Sktdc639BCfpw&s"
                  alt="Slide 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83J74cxyLIvUmpaI1pXBa2Sktdc639BCfpw&s"
                  alt="Slide 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83J74cxyLIvUmpaI1pXBa2Sktdc639BCfpw&s"
                  alt="Slide 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
            {/* Slider Controls */}
            <button
              onClick={() => setShowVideo(true)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/50 px-4 py-2 rounded-full"
            >
              Switch to Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
