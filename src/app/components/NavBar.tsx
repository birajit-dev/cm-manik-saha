'use client';
import { useState } from 'react';
import Image from 'next/image';
import {  Navbar,  NavbarBrand,  NavbarContent,  NavbarItem,  Link,  Button,  DropdownItem,  Dropdown,  DropdownTrigger,  DropdownMenu,} from '@nextui-org/react';
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from './Icons';

export default function App() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [isDetailsMenuOpen, setIsDetailsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={30} width={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={30} width={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={30} width={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={100} height={30} width={100} />,
  };
  
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderToggleButton = (section: string) => (
    <button
      className="text-lg font-bold transition-transform duration-200 hover:scale-110"
      onClick={() => toggleSection(section)}
    >
      {expandedSections[section] ? "−" : "+"}
    </button>
  );

  const toggleDetailsMenu = () => {
    setIsDetailsMenuOpen(!isDetailsMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-[#ff6b3d] to-[#ff9172] md:flex-row w-full relative shadow-lg font-['Playfair_Display']">
      {/* Left Section */}
      <div className="w-full md:w-[30%] relative z-20 flex justify-between backdrop-blur-sm">
        <Navbar className="bg-transparent">
          <NavbarBrand className="md:justify-end md:items-center justify-between items-center">
            <a href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/nav/image1.png"
                alt="Slide 1"
                width={100}
                height={100}
                className="object-cover rounded-lg shadow-md"
                priority
              />
            </a>
            <div className="flex md:hidden">
              <Button onClick={toggleMobileMenu} className="p-2 bg-white/10 backdrop-blur-md text-white text-2xl rounded-full hover:bg-white/20 transition-all duration-300 font-['Montserrat']">
                {isMobileMenuOpen ? '✖' : '☰'}
              </Button>
            </div>
          </NavbarBrand>
        </Navbar>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[70%] bg-transparent relative z-0 hidden md:block backdrop-blur-sm">
        <Navbar className="bg-transparent">
          <NavbarContent className="hidden sm:flex gap-6" justify="end">
            <NavbarItem isActive>
              <Link
                href="/"
                aria-current="page"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-all duration-300 tracking-wide font-['Montserrat'] hover:scale-110 transform relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/about-manik-saha"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-all duration-300 tracking-wide font-['Montserrat'] hover:scale-110 transform relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                About
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-all duration-300 tracking-wide font-['Montserrat'] hover:scale-110 transform bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Gallery
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Gallery"
                className="w-[280px] md:w-[340px] bg-white/90 backdrop-blur-md font-['Montserrat']"
                itemClasses={{
                  base: 'gap-4 hover:bg-gray-100 transition-colors duration-200',
                }}
              >
                <DropdownItem key="timeline" startContent={icons.scale} href="/gallery/image">
                  Photo Gallery
                </DropdownItem>
                <DropdownItem key="election-rally" startContent={icons.activity} href="/gallery/video">
                  Video Gallery
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem>
              <Link
                href="/press"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-all duration-300 tracking-wide font-['Montserrat'] hover:scale-110 transform relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Press
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/contact"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-all duration-300 tracking-wide font-['Montserrat'] hover:scale-110 transform relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Contact
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/myview"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-all duration-300 tracking-wide font-['Montserrat'] hover:scale-110 transform relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                My View
              </Link>
            </NavbarItem>
          </NavbarContent>

          {/* Menu Button */}
          <div className="flex">
            <Button onClick={toggleDetailsMenu} className="p-2 bg-white/10 backdrop-blur-md text-white text-2xl rounded-full hover:bg-white/20 transition-all duration-300 font-['Montserrat']">
              {isDetailsMenuOpen ? '✖' : '☰'}
            </Button>
          </div>
        </Navbar>
      </div>

      {/* Full-Screen Menu */}
      <div className={`fixed inset-0 z-50 bg-gradient-to-br from-[#ff6b3d] to-[#ff9172] transition-all duration-500 ease-in-out font-['Playfair_Display'] ${isDetailsMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 backdrop-blur-sm">
          <div className="flex justify-end pt-4">
            <Button
              onClick={toggleDetailsMenu}
              className="text-white text-4xl font-bold hover:text-gray-200 p-2 bg-transparent transition-all duration-300 hover:scale-110"
            >
              ✖
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-16 px-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4 text-white">PRESS</h2>
              <Link href="/press" className="text-lg text-white/90 hover:text-white transition-all duration-200 hover:translate-x-2">News</Link>
              <Link href="/press#interviews" className="text-lg text-white/90 hover:text-white transition-all duration-200 hover:translate-x-2">Interviews</Link>
              <Link href="/press#editorials" className="text-lg text-white/90 hover:text-white transition-all duration-200 hover:translate-x-2">Editorials</Link>
              <Link href="/press#critic" className="text-lg text-white/90 hover:text-white transition-all duration-200 hover:translate-x-2">Critic</Link>
              <Link href="/press#press-release" className="text-lg text-white/90 hover:text-white transition-all duration-200 hover:translate-x-2">Press Release</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-gradient-to-br from-[#ff6b3d] to-[#ff9172] transition-transform duration-500 ease-in-out font-['Playfair_Display'] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="container mx-auto px-4 backdrop-blur-sm">
          <div className="flex justify-end pt-4">
            <Button
              onClick={toggleMobileMenu}
              className="text-white text-2xl hover:text-gray-200 p-2 bg-transparent transition-all duration-300 hover:scale-110"
            >
              ✖
            </Button>
          </div>
          <div className="flex flex-col items-start mt-16 px-8">
            <Link href="/" className="text-lg text-white hover:text-gray-200 mb-4 transition-all duration-300 hover:translate-x-2 transform">Home</Link>
            <Link href="/about-manik-saha" className="text-lg text-white hover:text-gray-200 mb-4 transition-all duration-300 hover:translate-x-2 transform">About</Link>
            <Link href="/press" className="text-lg text-white hover:text-gray-200 mb-4 transition-all duration-300 hover:translate-x-2 transform">Press</Link>
            <Link href="/contact" className="text-lg text-white hover:text-gray-200 mb-4 transition-all duration-300 hover:translate-x-2 transform">Contact</Link>

            {[
              { title: "Gallery", items: [
                { name: "Photo Gallery", href: "/gallery/image" },
                { name: "Video", href: "/gallery/video" },
                { name: "Government Events", href: "/gallery/government-events" }
              ]},
              { title: "Press", items: [
                { name: "News", href: "/press#news" },
                { name: "Interviews", href: "/press#interviews" },
                { name: "Editorials", href: "/press#editorials" },
                { name: "Critic", href: "/press#critic" },
                { name: "Press Release", href: "/press#press-release" }
              ]},
              { title: "My Views", items: [
                { name: "Quotes", href: "/myview/quotes" },
                { name: "Blogs", href: "/myview/blogs" },
                { name: "Articles", href: "/myview/articles" }
              ]},
              { title: "Explore", items: [
                { name: "Discover", href: "/explore/discover" },
                { name: "Trending", href: "/explore/trending" },
                { name: "Popular", href: "/explore/popular" },
                { name: "Featured", href: "/explore/featured" },
                { name: "Recommended", href: "/explore/recommended" }
              ]},
              { title: "Events", items: [
                { name: "Latest", href: "/events/latest" },
                { name: "Upcoming Events", href: "/events/upcoming" }
              ]},
              { title: "Latest Press", items: [] },
            ].map(({ title, items }, index) => (
              <div key={index} className="w-full mb-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-lg hover:text-gray-200 transition-all duration-300">
                    {title}
                  </span>
                  {renderToggleButton(title)}
                </div>
                {expandedSections[title] && (
                  <div className="m-0 py-[10px]">
                    {items.map((item, idx) => (
                      <Link href={item.href} key={idx} className="text-md text-white/90 hover:text-white mb-2 block transition-all duration-200 hover:translate-x-2">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}