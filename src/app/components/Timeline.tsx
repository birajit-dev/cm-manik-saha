'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  
  const timelineEvents = [
    {
      id: 1,
      year: '2020',
      title: 'State BJP President',
      description: 'Led BJP Tripura State Unit',
      image: '/images/timeline/manik-saha.png',
      achievements: 'Strengthened party organization at grassroots level'
    },
    {
      id: 2,
      year: '2021',
      title: 'State Leadership',
      description: 'Strengthened party presence',
      image: '/images/timeline/manik-saha.png',
      achievements: 'Enhanced grassroots connections'
    },
    {
      id: 3,
      year: '2022',
      title: 'First Term as Chief Minister',
      description: 'Became the Chief Minister of Tripura',
      image: '/images/timeline/manik-saha.png',
      achievements: 'Focused on education reforms and social welfare'
    },
    {
      id: 4,
      year: '2023',
      title: 'Chief Minister of Tripura',
      description: 'Took oath as Chief Minister for second term',
      image: '/images/timeline/manik-saha.png',
      achievements: 'Leading major infrastructure and healthcare initiatives'
    },
    {
      id: 5,
      year: '2024',
      title: 'Current Chief Minister',
      description: 'Continuing to serve as Chief Minister',
      image: '/images/timeline/manik-saha.png',
      achievements: 'Ongoing development initiatives across Tripura'
    }
  ];

  const handleYearClick = (index: number) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setPreviousIndex(currentIndex);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < timelineEvents.length - 1) {
      setPreviousIndex(currentIndex);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-serif">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f37216] to-[#5DB996]">
            Political Journey of Dr. Manik Saha
          </span>
        </h2>

        <div className="relative">
          {/* Timeline Navigation */}
          <div className="flex items-center justify-between mb-16">
            <button 
              onClick={scrollLeft}
              className={`p-4 rounded-lg bg-white shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white transition-all duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft size={20} />
            </button>

            <div className="flex-1 mx-8">
              <div className="relative h-1 bg-gray-200 rounded">
                <div 
                  className="absolute h-full bg-[#f37216] rounded transition-all duration-500"
                  style={{ 
                    width: `${(currentIndex + 1) * (100/timelineEvents.length)}%`
                  }}
                />
              </div>
              <div className="flex justify-between mt-4">
                {timelineEvents.map((event, index) => (
                  <button
                    key={event.id}
                    onClick={() => handleYearClick(index)}
                    className={`relative group ${index === currentIndex ? 'text-[#f37216]' : 'text-gray-400'}`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 mb-2 mx-auto transition-all duration-300 ${
                      index <= currentIndex ? 'bg-[#f37216] border-[#f37216]' : 'bg-white border-gray-300'
                    }`} />
                    <span className="text-sm font-bold block text-center">
                      {event.year}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={scrollRight}
              className={`p-4 rounded-lg bg-white shadow-md text-[#f37216] hover:bg-[#f37216] hover:text-white transition-all duration-300 ${currentIndex === timelineEvents.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentIndex === timelineEvents.length - 1}
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Event Content */}
          <div className="bg-white rounded-2xl shadow-xl p-12 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src={timelineEvents[currentIndex].image}
                  alt={timelineEvents[currentIndex].title}
                  fill
                  className="rounded-2xl object-cover shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-[#f37216]/10 rounded-full text-[#f37216] font-semibold">
                  {timelineEvents[currentIndex].year}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 font-serif">
                  {timelineEvents[currentIndex].title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {timelineEvents[currentIndex].description}
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <p className="text-gray-600 italic">
                    {timelineEvents[currentIndex].achievements}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
