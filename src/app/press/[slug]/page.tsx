'use client';
import Image from 'next/image';
import { FaCalendar, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function PressDetails({ params }: { params: { slug: string } }) {
  // Mock data array to simulate different content based on ID
  const pressReleases = [
    {
      id: 1,
      image: '/images/press/press-1.png',
      headline: 'CM Dr. Manik Saha Inaugurates New Healthcare Facility',
      date: '2024-01-15',
      category: 'News',
      content: `The Chief Minister of Tripura, Dr. Manik Saha, inaugurated a state-of-the-art healthcare facility in Agartala today. The new facility is equipped with modern medical technology and will serve thousands of residents in the region.

      During the inauguration ceremony, Dr. Saha emphasized the government's commitment to improving healthcare infrastructure across the state. The facility includes specialized departments for cardiology, neurology, and pediatric care.`,
      source: 'Tripura Government Press Office'
    },
    {
      id: 2,
      image: '/images/press/press-1.png',
      headline: 'Education Reform Initiative Launched in Tripura',
      date: '2024-01-12', 
      category: 'Press Release',
      content: `The Tripura government has launched a comprehensive education reform initiative aimed at modernizing the state's education system. The program focuses on digital learning integration and teacher training.

      The initiative includes the distribution of tablets to high school students and the establishment of smart classrooms across government schools.`,
      source: 'Department of Education, Tripura'
    },
    {
      id: 3,
      image: '/images/press/press-1.png',
      headline: 'Infrastructure Development Project Announced',
      date: '2024-01-10',
      category: 'News',
      content: `A major infrastructure development project has been announced for Tripura's rural areas. The project includes road construction, bridge repairs, and rural electrification initiatives.

      The project is expected to significantly improve connectivity and living standards in remote areas of the state.`,
      source: 'Public Works Department, Tripura'
    }
  ];

  // Find the press release that matches the slug
  const pressRelease = pressReleases.find(pr => pr.id === parseInt(params.slug)) || pressReleases[0];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = pressRelease.headline;

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

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <div className="p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 font-serif leading-tight hover:text-[#f37216] transition-colors duration-300">
              {pressRelease.headline}
            </h1>

            <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
              <div className="flex items-center text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                <FaCalendar className="mr-2 text-[#f37216]" />
                <span className="text-sm font-medium">
                  {new Date(pressRelease.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
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
                src={pressRelease.image}
                alt={pressRelease.headline}
                fill
                quality={100}
                priority
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="prose max-w-none">
              {pressRelease.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6 text-justify font-serif leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  {paragraph}
                </p>
              ))}
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
