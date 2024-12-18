'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-3xl font-bold text-gray-900 font-serif">
              Professor (Dr.) Manik Saha
            </h3>
            <h3 className="text-xl md:text-2xl text-[#f37216] font-serif">
              Chief Minister of Tripura
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-serif text-justify">
              Dr. Manik Saha is serving as the Chief Minister of Tripura since 2022. 
              A distinguished dental surgeon turned politician, he has dedicated his life 
              to public service and the development of Tripura. His vision encompasses 
              inclusive growth, sustainable development, and the welfare of all citizens.
            </p>
            <Link 
              href="/about-detailed" 
              className="inline-block px-6 py-3 border-2 border-[#f37216] text-[#f37216] font-semibold rounded-lg 
                hover:bg-[#5DB996] hover:text-white transition-colors duration-300 hover:scale-105 transform font-serif text-justify"
            >
              Read More
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/images/slider/dr-manik-saha.jpeg"
              alt="Dr. Manik Saha"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
