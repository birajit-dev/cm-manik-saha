import Image from 'next/image';
import React from 'react';

const ProboCards = () => {
  return (
    <div className="max-w-10xl mx-auto p-4">
      {/* Adjust the grid layout */}
      <div className="grid grid-cols-12 gap-2">
        {/* Left Card (smaller) */}
        <div className="col-span-2 bg-white shadow-lg p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">What’s new in Probo?</h2>
          <div className="self-end">
            <a href="#" className="text-xl font-bold flex items-center">
              Read more <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Middle Card (wider) */}
        <div className="col-span-5 bg-black text-white shadow-lg p-8 flex justify-between items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Exiting trades is your choice</h2>
            <p className="text-lg mb-4">
              Be it loss protection or data security, Probo is user first always. Check out the latest on responsible trading.
            </p>
            <a href="#" className="text-xl font-bold flex items-center mt-4">
              Read more <span className="ml-2">&rarr;</span>
            </a>
          </div>
          <div className="ml-4">
            {/* Image on the Right */}
            <Image
              src="https://plus.unsplash.com/premium_photo-1715107535123-d09cea74d9fe" // Replace with your image path
              alt="Probo Cares Team"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Card (wider) */}
        <div className="col-span-5 bg-black text-white shadow-lg p-8 flex justify-between items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Exiting trades is your choice</h2>
            <p className="text-lg mb-4">
              The ‘Exit’ feature gives the user an opportunity to exit from the current trade and helps in controlling your losses and maximizing the profit.
            </p>
            <a href="#" className="text-xl font-bold flex items-center mt-4">
              Read more <span className="ml-2">&rarr;</span>
            </a>
          </div>
          <div className="ml-4">
            {/* Image on the Right */}
            <Image
              src="https://plus.unsplash.com/premium_photo-1715107535123-d09cea74d9fe" // Replace with your image path
              alt="Trading Illustration"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProboCards;