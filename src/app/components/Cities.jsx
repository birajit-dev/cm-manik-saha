import React from 'react';

const CityShowcase = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">What's new in Cities?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* City 1: Atlanta */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1465138456624-660a77cb151f" 
              alt="Atlanta" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Apply gradient only to the top part */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black to-transparent opacity-70"></div>
            <div className="relative z-10 p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Explore Atlanta</h3>
              <p className="text-gray-100">
                Discover the vibrant culture, attractions, and history of Atlanta.
              </p>
              <a href="#" className="text-indigo-200 hover:text-white font-semibold mt-4 block">Read more →</a>
            </div>
          </div>

          {/* City 2: Florida */}
          <div className="relative bg-gray-900 shadow-lg rounded-lg overflow-hidden min-h-[500px]">
            <img 
              src="https://plus.unsplash.com/premium_photo-1697730203858-ad45a3c7afa4" 
              alt="Florida" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Gradient for the top */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black to-transparent opacity-70"></div>
            <div className="relative z-10 p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Experience Florida</h3>
              <p className="text-gray-100">
                Enjoy the sunny beaches and diverse activities in Florida.
              </p>
              <a href="#" className="text-indigo-200 hover:text-white font-semibold mt-4 block">Read more →</a>
            </div>
          </div>

          {/* City 3: Texas */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden min-h-[500px]">
            <img 
              src="/images/texas.jpg" 
              alt="Texas" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Apply gradient only to the top part */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black to-transparent opacity-70"></div>
            <div className="relative z-10 p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">Discover Texas</h3>
              <p className="text-gray-100">
                Explore the large landscapes and historical sites in Texas.
              </p>
              <a href="#" className="text-indigo-200 hover:text-white font-semibold mt-4 block">Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityShowcase;
