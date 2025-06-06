'use client';
import { useState } from 'react';
import { FaPlay, FaCalendarAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: 1,
      thumbnail: '/images/thumbnail/thumb-1.jpg',
      title: 'Public Address at Agartala',
      date: 'March 15, 2024',
      url: 'https://www.youtube.com/embed/VIDEO_ID_1'
    },
    {
      id: 2,
      thumbnail: '/images/thumbnail/thumb-2.jpg',
      title: 'Development Project Launch',
      date: 'March 10, 2024',
      url: 'https://www.youtube.com/embed/VIDEO_ID_2'
    },
    {
      id: 3,
      thumbnail: '/images/thumbnail/thumb-3.jpg',
      title: 'Interview on State Progress',
      date: 'March 5, 2024',
      url: 'https://www.youtube.com/embed/VIDEO_ID_3'
    },

  ];

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-10 px-2 md:px-8 lg:px-16 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <a href="/gallery/video" className="text-2xl md:text-2xl font-bold mb-1 font-serif text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f37216] to-[#5DB996] relative border-2 border-[#f37216] rounded-lg p-2">
            Video Gallery
          </span>
        </a>


        <div className="w-full h-[2px] bg-[#f37216] mb-10 rounded-full mt-4"></div>


        <div className="grid md:grid-cols-5 gap-12">
          {/* Main Video */}
          <div className="md:col-span-3 transform hover:scale-[1.02] transition-all duration-300">
            <div
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={handleVideoClick}
            >
              <Image
                src={videos.find(v => v.id === selectedVideo)?.thumbnail || ''}
                alt={videos.find(v => v.id === selectedVideo)?.title || ''}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <FaPlay className="text-white text-5xl hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* <div className="p-8 bg-white rounded-b-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-[#f37216] transition-colors duration-300">
                {videos.find(v => v.id === selectedVideo)?.title}
              </h3>
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-[#f37216]" />
                {videos.find(v => v.id === selectedVideo)?.date}
              </div>
            </div> */}
          </div>

          {/* Video List */}
          <div className="md:col-span-2 space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar justify-center">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.id)}
                className={`group flex gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-xl transform hover:-translate-y-1 ${selectedVideo === video.id
                    ? 'bg-white shadow-xl border-l-4 border-[#f37216]'
                    : 'hover:border-l-4 hover:border-[#f37216]'
                  }`}
              >
                <div className="relative w-44 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-all duration-300 flex items-center justify-center">
                    <FaPlay className="text-white group-hover:scale-125 transition-transform duration-300" size={24} />
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-sm font-bold text-gray-800 mb-3 group-hover:text-[#f37216] transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaCalendarAlt className="mr-2 text-[#f37216]" />
                    {video.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-[#f37216] transition-colors"
            >
              <IoMdClose size={32} />
            </button>
            <iframe
              src={`${videos.find(v => v.id === selectedVideo)?.url}?autoplay=1`}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
