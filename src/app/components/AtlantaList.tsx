'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBed, FaBath, FaCar, FaChevronRight } from 'react-icons/fa'; // Import only the right arrow icon

export default function PropertyCarousel() {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides for medium screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 slide for mobile screens
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100 relative">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Dream home awaits in the heart of Georgia!</h2>
        <p className="text-gray-600 mb-8">Explore Atlanta's finest homes and properties in our curated Featured Listings.</p>
      </div>

      <div className="container mx-auto">
        {/* Navigation Button */}
       

        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          <div className="px-2"> {/* Add padding for spacing */}
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg"
                  alt="Property 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">FREE APP AND ADMIN</div>
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs font-semibold rounded">FOR RENT</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">$1843 /mo</h3>
                <p className="text-gray-200">1824 DEFOOR AVE NE ATLANTA GA 30316</p>
                <div className="flex items-center mt-4 text-gray-200">
                  <FaBed className="mr-1" /> <span>1 Bed</span>
                  <span className="mx-2">•</span>
                  <FaBath className="mr-1" /> <span>1 Bath</span>
                  <span className="mx-2">•</span>
                  <FaCar className="mr-1" /> <span>1 Garage</span>
                  <span className="mx-2">•</span>
                  <span>1200 Sq Ft</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-200">Darius Gresham</span>
                  <span className="text-gray-200">One Day Ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-2"> {/* Add padding for spacing */}
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg"
                  alt="Property 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">SPECIAL ON SELECT UNITS</div>
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs font-semibold rounded">FOR RENT</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">$ /mo</h3>
                <p className="text-gray-200">3039 Wells St Avondale Estates, GA 30002</p>
                <div className="flex items-center mt-4 text-gray-200">
                  <FaBed className="mr-1" /> <span>1 Bed</span>
                  <span className="mx-2">•</span>
                  <FaBath className="mr-1" /> <span>1 Bath</span>
                  <span className="mx-2">•</span>
                  <FaCar className="mr-1" /> <span>1 Garage</span>
                  <span className="mx-2">•</span>
                  <span>1200 Sq Ft</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-200">Darius Gresham</span>
                  <span className="text-gray-200">One Day Ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-2"> {/* Add padding for spacing */}
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg"
                  alt="Property 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">8 WEEK FREE</div>
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs font-semibold rounded">FOR RENT</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">$1470 /mo</h3>
                <p className="text-gray-200">1296 Moreland Ave SE Atlanta GA 30316</p>
                <div className="flex items-center mt-4 text-gray-200">
                  <FaBed className="mr-1" /> <span>1 Bed</span>
                  <span className="mx-2">•</span>
                  <FaBath className="mr-1" /> <span>1 Bath</span>
                  <span className="mx-2">•</span>
                  <FaCar className="mr-1" /> <span>1 Garage</span>
                  <span className="mx-2">•</span>
                  <span>1200 Sq Ft</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-200">Darius Gresham</span>
                  <span className="text-gray-200">One Day Ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="px-2"> {/* Add padding for spacing */}
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="relative h-64">
                <img
                  src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg"
                  alt="Property 4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">8 WEEK FREE</div>
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs font-semibold rounded">FOR RENT</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">$1470 /mo</h3>
                <p className="text-gray-200">1296 Moreland Ave SE Atlanta GA 30316</p>
                <div className="flex items-center mt-4 text-gray-200">
                  <FaBed className="mr-1" /> <span>3 Bed</span>
                  <span className="mx-2">•</span>
                  <FaBath className="mr-1" /> <span>1 Bath</span>
                  <span className="mx-2">•</span>
                  <FaCar className="mr-1" /> <span>1 Garage</span>
                  <span className="mx-2">•</span>
                  <span>1200 Sq Ft</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-200">Darius Gresham</span>
                  <span className="text-gray-200">One Day Ago</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}