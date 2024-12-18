'use client';
import React, { useState } from 'react';
import { FaHome, FaHeart, FaSignOutAlt, FaUser, FaCog, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-['Galano_Grotesque_Alt','Trebuchet_MS',sans-serif]">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-white text-gray-800 shadow-xl transition-all duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-6">
          {isSidebarOpen ? (
            <h2 className="text-2xl font-bold">Dashboard</h2>
          ) : (
            <Image src="/logo-icon.png" alt="Logo" width={32} height={32} />
          )}
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className="mt-8">
          <Link href="/profile/my-property" className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            <FaHome className="text-xl" />
            {isSidebarOpen && <span className="ml-4 text-lg">My Property</span>}
          </Link>
          <Link href="/profile/liked-property" className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            <FaHeart className="text-xl" />
            {isSidebarOpen && <span className="ml-4 text-lg">Liked Property</span>}
          </Link>
          <Link href="/profile/account" className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            <FaUser className="text-xl" />
            {isSidebarOpen && <span className="ml-4 text-lg">Account</span>}
          </Link>
          <Link href="/profile/messages" className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            <FaEnvelope className="text-xl" />
            {isSidebarOpen && <span className="ml-4 text-lg">Messages</span>}
          </Link>
          <Link href="/profile/settings" className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            <FaCog className="text-xl" />
            {isSidebarOpen && <span className="ml-4 text-lg">Settings</span>}
          </Link>
        </nav>
        <button className="flex items-center px-6 py-4 mt-auto text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 w-full text-left absolute bottom-0">
          <FaSignOutAlt className="text-xl" />
          {isSidebarOpen && <span className="ml-4 text-lg">Log Out</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome, User!</h1>
        
        {/* Property Listings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Your Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card (Example) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <img src="/placeholder-property.jpg" alt="Property" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Apartment</h3>
                <p className="text-gray-600 mb-4">123 Main St, Anytown, USA</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold text-lg">$250,000</span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">View Details</button>
                </div>
              </div>
            </div>
            {/* Add more property cards as needed */}
          </div>
        </section>

        {/* Favorite Properties */}
        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Favorite Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Favorite Property Card (Example) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <img src="/placeholder-favorite.jpg" alt="Favorite Property" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Villa</h3>
                <p className="text-gray-600 mb-4">456 Ocean Ave, Beachtown, USA</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold text-lg">$750,000</span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">View Details</button>
                </div>
              </div>
            </div>
            {/* Add more favorite property cards as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
