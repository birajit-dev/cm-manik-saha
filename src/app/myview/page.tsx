'use client';
import Image from 'next/image';

export default function MyView() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
      {/* Quotes Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-gray-800 hover:text-[#f37216] transition-colors duration-300 relative">
          <span className="relative inline-block">
            Inspiring Quotes
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f37216]"></div>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
              author: "Winston Churchill"
            },
            {
              quote: "The future belongs to those who believe in the beauty of their dreams.",
              author: "Eleanor Roosevelt"  
            },
            {
              quote: "The only way to do great work is to love what you do.",
              author: "Steve Jobs"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-6xl text-[#f37216] opacity-50 mb-4">"</div>
              <p className="text-gray-700 font-serif text-lg leading-relaxed mb-6 italic">
                {item.quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-1 bg-[#5DB996] mr-3"></div>
                <p className="text-[#5DB996] font-bold">- {item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-gray-800 hover:text-[#f37216] transition-colors duration-300 relative">
          <span className="relative inline-block">
            Featured Articles
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f37216]"></div>
          </span>
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          {[
            {
              title: "The Future of Technology",
              description: "Exploring emerging trends and innovations shaping our digital landscape..."
            },
            {
              title: "Sustainable Living Guide",
              description: "Practical tips and strategies for an eco-friendly lifestyle..."
            },
            {
              title: "Mental Health Awareness",
              description: "Understanding the importance of mental well-being in modern life..."
            },
            {
              title: "Financial Planning 101",
              description: "Essential strategies for securing your financial future..."
            }
          ].map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-60">
                <Image
                  src="/images/placeholder.jpg"
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#f37216] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-base">
                  {item.description}
                </p>
                <button className="flex items-center text-[#f37216] font-bold hover:text-[#5DB996] transition-colors duration-300 group">
                  Read More 
                  <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-gray-800 hover:text-[#f37216] transition-colors duration-300 relative">
          <span className="relative inline-block">
            Latest Blog Posts
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#f37216]"></div>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              date: "January 15, 2024",
              title: "The Art of Mindful Living",
              excerpt: "Discover how mindfulness can transform your daily life and boost well-being..."
            },
            {
              date: "January 14, 2024",
              title: "Digital Transformation",
              excerpt: "How businesses are adapting to the new digital age and thriving..."
            },
            {
              date: "January 13, 2024",
              title: "Sustainable Fashion",
              excerpt: "Exploring eco-friendly fashion trends and conscious consumption..."
            }
          ].map((item, index) => (
            <div key={index} className="group bg-gradient-to-r from-[#f3721610] to-[#5DB99610] rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/images/placeholder.jpg"
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-[#5DB996] bg-[#5DB996]/10">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#f37216] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {item.excerpt}
                </p>
                <div className="pt-4">
                  <button className="w-full bg-[#f37216] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#5DB996] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-[#f37216]">
                    Read Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
