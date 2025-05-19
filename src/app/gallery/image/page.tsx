'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaDownload, FaImages, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Select, { StylesConfig } from 'react-select';

interface ImageData {
  id: number;
  src: string;
  title: string;
  date: string;
  eventType: string;
  relatedImages?: string[];
}

interface FilterOption {
  value: string;
  label: string;
}

const imageGallery: ImageData[] = [
  {
    id: 1,
    src: '/images/gallery/image1.jpg',
    title: 'BJP Rally 2023',
    date: '2023-12-01',
    eventType: 'Political Rally',
    relatedImages: [
      '/images/gallery/image1-1.jpg',
      '/images/gallery/image1-2.jpg',
      '/images/gallery/image1-3.jpg',
    ]
  },
  {
    id: 2,
    src: '/images/gallery/image2.jpg',
    title: 'Meeting with Party Workers',
    date: '2023-11-28',
    eventType: 'Internal Meeting',
    relatedImages: [
      '/images/gallery/image2-1.jpg',
      '/images/gallery/image2-2.jpg',
    ]
  },
];

const ImageCard = ({ image, onSelect, onDownload }: { 
  image: ImageData;
  onSelect: () => void;
  onDownload: (e: React.MouseEvent) => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-60 sm:h-80 cursor-pointer" onClick={onSelect}>
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-base sm:text-xl font-semibold">{image.title}</h3>
        </div>

        {image.relatedImages && (
          <div className="absolute top-4 right-4 bg-white/90 text-[#f37216] px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm">
            <FaImages className="text-sm sm:text-lg" />
            <span className="text-sm sm:text-base font-semibold">{image.relatedImages.length + 1}</span>
          </div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onDownload}
          className="absolute bottom-4 right-4 bg-[#f37216] text-white p-2 sm:p-3 rounded-full hover:bg-[#d65c0d] shadow-lg backdrop-blur-sm"
        >
          <FaDownload className="text-sm sm:text-lg" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Modal = ({ image, isOpen, onClose, onDownload }: {
  image: ImageData | null;
  isOpen: boolean;
  onClose: () => void;
  onDownload: (src: string, title: string) => void;
}) => {
  const allImages = image ? [image.src, ...(image.relatedImages || [])] : [];

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden p-2 sm:p-4"
          >
            <button
              onClick={onClose}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white bg-black/50 p-1.5 sm:p-2 rounded-full z-50 hover:bg-black/70 transition-colors"
            >
              <FaTimes size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {allImages.map((src, index) => (
                <div key={src} className="relative aspect-video">
                  <Image
                    src={src}
                    alt={`${image.title} - ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onDownload(src, `${image.title}-${index + 1}`)}
                    className="absolute bottom-2 right-2 bg-[#f37216] text-white p-1.5 sm:p-2 rounded-full hover:bg-[#d65c0d] shadow-lg"
                  >
                    <FaDownload className="text-xs sm:text-sm" />
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ImageGallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = (imageSrc: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredAndSortedImages = imageGallery
    .filter(img => selectedFilter === 'all' ? true : img.eventType === selectedFilter)
    .sort((a, b) => sortBy === 'newest' 
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  const uniqueEventTypes = Array.from(new Set(imageGallery.map(img => img.eventType)));

  const filterOptions: FilterOption[] = [
    { value: 'all', label: 'All Engagements' },
    ...uniqueEventTypes.map(type => ({ value: type, label: type }))
  ];

  const sortOptions: FilterOption[] = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' }
  ];

  const customStyles: StylesConfig<FilterOption, false> = {
    control: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: 'white',
      borderColor: '#f37216',
      borderWidth: '2px',
      borderRadius: '0.75rem',
      padding: '0.25rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#d65c0d'
      }
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? '#f37216' : 'white',
      '&:hover': {
        backgroundColor: '#d65c0d',
        color: 'white'
      }
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      zIndex: 99999,
      position: 'absolute',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
    }),
    menuPortal: (baseStyles) => ({
      ...baseStyles,
      zIndex: 99999
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-12 gap-4">
          <h2 className="text-xl sm:text-2xl font-bold border-2 border-[#f37216] text-[#f37216] inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-serif hover:border-[#d65c0d] hover:text-[#d65c0d] transition-colors duration-300">
            Photo Gallery
          </h2>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <motion.div 
              className="relative w-full sm:w-56"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ zIndex: 20 }}
            >
              <Select<FilterOption>
                options={filterOptions}
                value={filterOptions.find(option => option.value === selectedFilter)}
                onChange={(newValue) => setSelectedFilter(newValue?.value ?? 'all')}
                styles={customStyles}
                isSearchable={false}
                menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                menuPosition="fixed"
              />
            </motion.div>

            <motion.div 
              className="relative w-full sm:w-56"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ zIndex: 20 }}
            >
              <Select<FilterOption>
                options={sortOptions}
                value={sortOptions.find(option => option.value === sortBy)}
                onChange={(newValue) => setSortBy(newValue?.value ?? 'newest')}
                styles={customStyles}
                isSearchable={false}
                menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                menuPosition="fixed"
              />
            </motion.div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <AnimatePresence>
            {filteredAndSortedImages.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                onSelect={() => {
                  setSelectedImage(image);
                  setShowModal(true);
                }}
                onDownload={(e) => {
                  e.stopPropagation();
                  handleDownload(image.src, image.title);
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <Modal
          image={selectedImage}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
}