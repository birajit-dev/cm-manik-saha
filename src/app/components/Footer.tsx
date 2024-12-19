'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#f37216]" />
                <p>Office of Chief Minister, Civil Secretariat, Capital Complex, Agartala</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#f37216]" />
                <p>+91 381-2413200</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#f37216]" />
                <p>cm-tr@nic.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#f37216] transition-colors">About</Link></li>
              <li><Link href="/press" className="hover:text-[#f37216] transition-colors">Press Releases</Link></li>
              <li><Link href="/gallery" className="hover:text-[#f37216] transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#f37216] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter to receive updates and news.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#f37216]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-[#f37216] to-[#5DB996] rounded-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/drmaniksaha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#f37216] transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/drmaniksaha2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#f37216] transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/dr.maniksaha1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#f37216] transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Office of Chief Minister, Tripura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
