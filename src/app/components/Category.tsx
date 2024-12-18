'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-8 flex items-center justify-center">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Text Block */}
        <div className="md:col-span-1 flex flex-col justify-center bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Living Spaces</h1>
          <p className="text-gray-600 text-lg mb-8">
            Explore our diverse living options: Highrise luxury, Live & Work spaces, trendy Lofts, and charming Townhomes. Your ideal home awaits!
          </p>
          <div className="h-1 w-16 bg-blue-500 mb-6"></div>
        </div>

        {/* Right Section: Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Highrise */}
          <motion.div 
            className="relative bg-white rounded-lg shadow-lg overflow-hidden h-[24rem] transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05, rotate: 2 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-70 z-10"></div>
            <Image
              src="/path/to/highrise-image.jpg"
              alt="Highrise"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
            <div className="relative p-6 z-20 text-white">
              <span className="block text-sm font-semibold">7 Properties</span>
              <h2 className="text-3xl font-bold">Highrise</h2>
              <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaInfoCircle className="mr-2" /> MORE DETAILS
              </button>
            </div>
          </motion.div>

          {/* Card 2: Lofts */}
          <motion.div 
            className="relative bg-white rounded-lg shadow-lg overflow-hidden h-[16rem] transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05, rotate: -2 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-t from-green-800 via-transparent to-transparent opacity-70 z-10"></div>
            <Image
              src="/path/to/lofts-image.jpg"
              alt="Lofts"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
            <div className="relative p-6 z-20 text-white">
              <span className="block text-sm font-semibold">12 Properties</span>
              <h2 className="text-3xl font-bold">Lofts</h2>
              <button className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaInfoCircle className="mr-2" /> MORE DETAILS
              </button>
            </div>
          </motion.div>

          {/* Card 3: Live in Work */}
          <motion.div 
            className="relative bg-white rounded-lg shadow-lg overflow-hidden h-[16rem] transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05, rotate: 2 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-t from-purple-800 via-transparent to-transparent opacity-70 z-10"></div>
            <Image
              src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg"
              alt="Live in Work"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
            <div className="relative p-6 z-20 text-white">
              <span className="block text-sm font-semibold">23 Properties</span>
              <h2 className="text-3xl font-bold">Live in Work</h2>
              <button className="mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaInfoCircle className="mr-2" /> MORE DETAILS
              </button>
            </div>
          </motion.div>

          {/* Card 4: Townhomes */}
          <motion.div 
            className="relative bg-white rounded-lg shadow-lg overflow-hidden h-[16rem] transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05, rotate: -2 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-t from-red-800 via-transparent to-transparent opacity-70 z-10"></div>
            <Image
              src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg"
              alt="Townhomes"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
            <div className="relative p-6 z-20 text-white">
              <span className="block text-sm font-semibold">10 Properties</span>
              <h2 className="text-3xl font-bold">Townhomes</h2>
              <button className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaInfoCircle className="mr-2" /> MORE DETAILS
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}