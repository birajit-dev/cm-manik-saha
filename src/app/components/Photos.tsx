'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronLeft, FaTimes, FaCamera, FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      src: '/images/gallery/gallery-2.jpg',
      caption: 'Meeting with Citizens at Public Event',
      date: 'September 5, 2023',
      category: 'public',
      size: 'medium'
    },
    {
      id: 3,
      src: '/images/gallery/gallery-3.jpg',
      caption: 'Inauguration of New Hospital Wing',
      date: 'October 12, 2023',
      category: 'healthcare',
      size: 'small'
    },
    {
      id: 4,
      src: '/images/gallery/gallery-7.jpg',
      caption: 'Cultural Program at Agartala',
      date: 'November 20, 2023',
      category: 'culture',
      size: 'medium'
    },
    {
      id: 5,
      src: '/images/gallery/gallery-8.jpg',
      caption: 'Education Summit 2024',
      date: 'January 15, 2024',
      category: 'education',
      size: 'large'
    },
    {
      id: 6,
      src: '/images/gallery/gallery-9.jpg',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 7,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 8,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 9,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 10,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 11,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 12,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 13,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 14,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
      caption: 'Republic Day Celebrations',
      date: 'January 26, 2024',
      category: 'events',
      size: 'small'
    },
    {
      id: 15,
      src: 'https://source.unsplash.com/1600x900/?Republic-Day-Celebrations',
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
    if (startIndex + (windowWidth > 640 ? 4 : 1) < filteredPhotos.length) {
      setStartIndex(startIndex + (windowWidth > 640 ? 4 : 1));
    }
  };

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-2xl font-bold font-serif text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f37216] to-[#5DB996] relative inline-flex items-center gap-4 border-2 border-[#f37216] rounded-lg p-2">
            <FaCamera className="text-[#f37216]" />
            Photo Gallery
          </span>
        </h2>

        <div className="w-full h-[2px] bg-[#f37216] mb-5 rounded-full mt-4"></div>

        <div className="flex overflow-x-auto mb-8 pb-4 gap-2 whitespace-nowrap [&::-webkit-scrollbar]:bg-[#f7f8fa] [&::-webkit-scrollbar-thumb]:bg-[#f7f8fa]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs px-5 py-3 rounded-full capitalize transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                ? 'bg-gradient-to-r from-[#f37216] to-[#5DB996] text-white shadow-xl'
                : 'bg-white text-gray-600 hover:bg-[#f37216] hover:text-white shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {windowWidth > 640 ? (
          <div className="grid grid-cols-12 gap-4">
            {/* Main Image */}
            <div className="col-span-6">
              <div
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={toggleLightbox}
              >
                <Image
                  src={photos.find(p => p.id === selectedImage)?.src || ''}
                  alt={photos.find(p => p.id === selectedImage)?.caption || ''}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="600px"
                  priority
                  quality={100}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {photos.find(p => p.id === selectedImage)?.caption}
                  </h3>
                  <p className="text-white/90">
                    {photos.find(p => p.id === selectedImage)?.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="col-span-6 flex h-full">
              <button
                onClick={scrollUp}
                className="p-2 bg-white rounded-full shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white mr-4 self-center"
                disabled={startIndex === 0}
              >
                <FaChevronLeft />
              </button>

              <div className="flex-grow overflow-hidden">
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 h-full ${windowWidth > 640 ? 'grid-cols-4' : 'grid-cols-1'}`}>
                  {filteredPhotos.slice(startIndex, startIndex + (windowWidth > 640 ? 12 : 1)).map((photo, index) => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedImage(photo.id)}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${selectedImage === photo.id ? 'ring-2 ring-[#f37216]' : ''
                        }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover"
                        sizes="180px"
                        quality={100}
                        priority
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>

              </div>

              <button
                onClick={scrollDown}
                className="p-2 bg-white rounded-full shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white ml-4 self-center"
                disabled={startIndex + (windowWidth > 640 ? 12 : 1) >= filteredPhotos.length}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full">
              <div
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={toggleLightbox}
              >
                <Image
                  src={photos.find(p => p.id === selectedImage)?.src || ''}
                  alt={photos.find(p => p.id === selectedImage)?.caption || ''}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="600px"
                  priority
                  quality={100}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {photos.find(p => p.id === selectedImage)?.caption}
                  </h3>
                  <p className="text-white/90">
                    {photos.find(p => p.id === selectedImage)?.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-6 flex h-full">
              <button
                onClick={scrollUp}
                className="p-2 bg-white rounded-full shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white mr-4 self-center"
                disabled={startIndex === 0}
              >
                <FaChevronLeft />
              </button>

              <div className="flex-grow overflow-hidden">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 h-full">
                  {filteredPhotos.slice(startIndex, startIndex + 3).map((photo, index) => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedImage(photo.id)}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${selectedImage === photo.id ? 'ring-2 ring-[#f37216]' : ''
                        }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover"
                        sizes="180px"
                        quality={100}
                        priority
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollDown}
                className="p-2 bg-white rounded-full shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white ml-4 self-center"
                disabled={startIndex + 3 >= filteredPhotos.length}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
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
          <div className="relative w-full max-w-6xl aspect-[4/3]">
            <Image
              src={photos.find(p => p.id === selectedImage)?.src || ''}
              alt={photos.find(p => p.id === selectedImage)?.caption || ''}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}