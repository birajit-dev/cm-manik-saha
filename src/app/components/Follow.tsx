'use client';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Follow() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-serif">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f37216] to-[#5DB996]">
            Social Media Feed
          </span>
        </h2>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facebook Feed */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <a 
              href="https://www.facebook.com/drmaniksaha/"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 mb-4 hover:text-[#1877F2] transition-colors"
            >
              <FaFacebook className="text-[#1877F2]" size={24} />
              <span className="font-semibold">Facebook</span>
            </a>
            <div className="min-h-[400px] w-full">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdrmaniksaha&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="100%"
                height="400"
                style={{border: 'none', overflow: 'hidden'}}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          {/* Twitter Feed */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <a 
              href="https://x.com/drmaniksaha2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4 hover:text-[#1DA1F2] transition-colors"
            >
              <FaTwitter className="text-[#1DA1F2]" size={24} />
              <span className="font-semibold">Twitter</span>
            </a>
            <div className="min-h-[400px]">
              <a 
                className="twitter-timeline" 
                data-height="400"
                href="https://twitter.com/drmaniksaha2?ref_src=twsrc%5Etfw"
              >
                Tweets by drmaniksaha2
              </a>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <a 
              href="https://www.instagram.com/dr.maniksaha1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4 hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram className="text-[#E4405F]" size={24} />
              <span className="font-semibold">Instagram</span>
            </a>
            <div className="min-h-[400px]">
              <iframe
                src={`https://www.instagram.com/dr.maniksaha1/embed`}
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
