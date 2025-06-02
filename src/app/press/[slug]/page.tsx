'use client';
import Image from 'next/image';
import { FaCalendar, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface PressRelease {
  _id: string;
  title: string;
  date: string;
  thumbnail: string;
  content: string;
  source: string;
  author: string;
  tags: string[];
  link: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export default function PressDetails({ params }: { params: { slug: string } }) {
  const [pressRelease, setPressRelease] = useState<PressRelease | null>(null);

  useEffect(() => {
    const fetchPressRelease = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/v1/press/${params.slug}`);
        const data = await response.json();
        setPressRelease(data);
      } catch (error) {
        console.error('Error fetching press release:', error);
      }
    };

    fetchPressRelease();
  }, [params.slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = pressRelease?.title || '';

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  if (!pressRelease) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <div className="p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 font-serif leading-tight hover:text-[#f37216] transition-colors duration-300">
              {pressRelease.title}
            </h1>

            <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
              <div className="flex items-center text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                <FaCalendar className="mr-2 text-[#f37216]" />
                <span className="text-sm font-medium">
                  {pressRelease.date}
                </span>
              </div>

              <div className="flex gap-6">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="text-[#1877F2] hover:text-[#f37216] transition-all duration-300 transform hover:scale-110"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={24} />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="text-[#1DA1F2] hover:text-[#f37216] transition-all duration-300 transform hover:scale-110"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={24} />
                </button>
                <button 
                  onClick={() => handleShare('whatsapp')}
                  className="text-[#25D366] hover:text-[#f37216] transition-all duration-300 transform hover:scale-110"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="text-[#0A66C2] hover:text-[#f37216] transition-all duration-300 transform hover:scale-110"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin size={24} />
                </button>
              </div>
            </div>

            <div className="relative h-[600px] w-full mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={`http://localhost:3002${pressRelease.thumbnail}`}
                alt={pressRelease.title}
                fill
                quality={100}
                priority
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="prose max-w-none">
              <div 
                className="text-gray-700 mb-6 text-justify font-serif leading-relaxed hover:text-gray-900 transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: pressRelease.content }}
              />
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-[#f3721610] to-[#5DB99610] rounded-xl border border-gray-200">
              <p className="text-gray-700 font-serif flex items-center">
                <span className="text-[#f37216] font-bold mr-2">Source:</span> 
                <span className="hover:text-[#5DB996] transition-colors duration-300">{pressRelease.source}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
