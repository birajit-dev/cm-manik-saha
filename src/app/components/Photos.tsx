'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaTimes, FaCamera, FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const photos = [
    {
      id: 1,
      src: '/images/gallery/gallery-1.jpg',
      caption: 'Dr. Manik Saha at Independence Day Celebration',
      date: 'August 15, 2023',
      category: 'events',
      size: 'large'
    },
    {
      id: 2,
      src: '/images/gallery/cm-2.jpg', 
      caption: 'Meeting with Citizens at Public Event',
      date: 'September 5, 2023',
      category: 'public',
      size: 'medium'
    },
    {
      id: 3,
      src: '/images/gallery/cm-3.jpg',
      caption: 'Inauguration of New Hospital Wing',
      date: 'October 12, 2023',
      category: 'healthcare',
      size: 'small'
    },
    {
      id: 4,
      src: '/images/gallery/cm-4.jpg',
      caption: 'Cultural Program at Agartala',
      date: 'November 20, 2023',
      category: 'culture',
      size: 'medium'
    },
    {
      id: 5,
      src: '/images/gallery/cm-5.jpg',
      caption: 'Education Summit 2024',
      date: 'January 15, 2024',
      category: 'education',
      size: 'large'
    },
    {
      id: 6,
      src: '/images/gallery/cm-6.jpg',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    }
  ];

  const categories = ['all', 'events', 'public', 'healthcare', 'culture', 'education'];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const toggleLightbox = () => setIsLightboxOpen(!isLightboxOpen);

  const scrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const scrollDown = () => {
    if (startIndex + 4 < filteredPhotos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto"> {/* Changed from max-w-7xl to max-w-5xl */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-serif">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f37216] to-[#5DB996] relative inline-flex items-center gap-4">
            <FaCamera className="text-[#f37216]" />
            Photo Gallery
            <div className="absolute w-32 h-1 bg-gradient-to-r from-[#f37216] to-[#5DB996] bottom-0 left-1/2 transform -translate-x-1/2 mt-4 rounded-full"></div>
          </span>
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full capitalize transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#f37216] to-[#5DB996] text-white shadow-xl'
                  : 'bg-white text-gray-600 hover:bg-[#f37216] hover:text-white shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Main Image */}
          <div className="flex-grow">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={photos.find(p => p.id === selectedImage)?.src || ''}
                alt={photos.find(p => p.id === selectedImage)?.caption || ''}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" /* Changed from 75vw to 50vw */
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {photos.find(p => p.id === selectedImage)?.caption}
                </h3>
                <p className="text-white/80">
                  {photos.find(p => p.id === selectedImage)?.date}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="w-36 flex flex-col"> {/* Changed from w-48 to w-36 */}
            <button 
              onClick={scrollUp}
              className="p-2 bg-white rounded-full shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white mb-4"
              disabled={startIndex === 0}
            >
              <FaChevronUp />
            </button>
            
            <div className="flex-grow overflow-hidden">
              <div className="space-y-4">
                {filteredPhotos.slice(startIndex, startIndex + 4).map((photo) => (
                  <div 
                    key={photo.id}
                    onClick={() => setSelectedImage(photo.id)}
                    className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${
                      selectedImage === photo.id ? 'ring-2 ring-[#f37216]' : ''
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      className="object-cover"
                      sizes="90px" /* Changed from 120px to 90px */
                    />
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={scrollDown}
              className="p-2 bg-white rounded-full shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white mt-4"
              disabled={startIndex + 4 >= filteredPhotos.length}
            >
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={toggleLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#f37216] transition-colors"
          >
            <FaTimes size={32} />
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]"> {/* Changed from max-w-6xl to max-w-4xl */}
            <Image
              src={photos.find(p => p.id === selectedImage)?.src || ''}
              alt={photos.find(p => p.id === selectedImage)?.caption || ''}
              fill
              className="object-contain"
              sizes="90vw" /* Changed from 100vw to 90vw */
            />
          </div>
        </div>
      )}
    </section>
  );
}
