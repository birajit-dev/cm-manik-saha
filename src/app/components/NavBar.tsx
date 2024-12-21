'use client';
import { useState } from 'react';
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react';
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
      className="text-lg font-bold"
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
    <div className="flex flex-col bg-[#f37216] md:flex-row w-full relative">
      {/* Left Section */}
      <div className="w-full md:w-[35%] relative z-20 flex justify-end">
        <Navbar className="bg-transparent">
          <NavbarBrand className="justify-end items-center">
            <div className="flex items-center gap-2">
              <Image
                src="https://seeklogo.com/images/B/bjp-bhartiya-janta-party-logo-48FE892291-seeklogo.com.png"
                alt="BJP Logo"
                width={70}
                height={60}
                loading="eager"
              />
              <span className="text-xl font-extrabold font-serif tracking-wide text-white hover:text-gray-100 transition-colors">
                Professor (Dr.) Manik Saha
              </span>
            </div>
            <div className="flex md:hidden">
              <Button onClick={toggleMobileMenu} className="p-2 bg-transparent text-white text-2xl">
                {isMobileMenuOpen ? '✖' : '☰'}
              </Button>
            </div>
          </NavbarBrand>
        </Navbar>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[65%] bg-[#5DB996] relative z-0 hidden md:block">
        <Navbar className="bg-transparent">
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem isActive>
              <Link
                href="#"
                aria-current="page"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200"
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200"
              >
                About
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200"
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
                className="w-[280px] md:w-[340px]"
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                <DropdownItem key="autoscaling" startContent={icons.scale}>
                  Autoscaling
                </DropdownItem>
                <DropdownItem key="usage_metrics" startContent={icons.activity}>
                  Usage Metrics
                </DropdownItem>
                <DropdownItem key="production_ready" startContent={icons.flash}>
                  Production Ready
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem>
              <Link
                href="#"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200"
              >
                Press
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200"
              >
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>

          {/* Menu Button */}
          <div className="flex">
            <Button onClick={toggleDetailsMenu} className="p-2 bg-transparent text-white text-2xl">
              {isDetailsMenuOpen ? '✖' : '☰'}
            </Button>
          </div>
        </Navbar>
      </div>

      {/* Full-Screen Menu */}
      <div className={`fixed inset-0 z-50 bg-[#f2f2f2] transition-opacity duration-300 ease-in-out ${isDetailsMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-end pt-4">
            <Button
              onClick={toggleDetailsMenu}
              className="text-black text-4xl font-bold hover:text-gray-600 p-2 bg-transparent transition-colors duration-200"
            >
              ✖
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-16 px-8">
            {/* First Row */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4">PRESS</h2>
              <Link href="#" className="text-lg hover:text-gray-600">News</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Interviews</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Editorials</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Critic</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Press Release</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4">MY VIEWS</h2>
              <Link href="#" className="text-lg hover:text-gray-600">Quotes</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Blogs</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Articles</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4">GALLERY</h2>
              <Link href="#" className="text-lg hover:text-gray-600">Timeline</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Election Rally</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Government Events</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4">HOME</h2>
              <Link href="#" className="text-lg hover:text-gray-600">Dashboard</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Overview</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Profile</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Settings</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Analytics</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Reports</Link>
            </div>

            {/* Second Row */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4">EXPLORE</h2>
              <Link href="#" className="text-lg hover:text-gray-600">Discover</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Trending</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Popular</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Featured</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Recommended</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4">EVENTS</h2>
              <Link href="#" className="text-lg hover:text-gray-600">Latest</Link>
              <Link href="#" className="text-lg hover:text-gray-600">Upcoming Events</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4">LATEST PRESS</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-[#f2f2f2] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-end pt-4">
            <Button
              onClick={toggleMobileMenu}
              className="text-black text-2xl hover:text-gray-600 p-2 bg-transparent transition-colors duration-200 ease-in-out"
            >
              ✖
            </Button>
          </div>
          <div className="flex flex-col items-start mt-16 px-8 transition-opacity duration-500 ease-in-out">
            <Link href="#" className="text-lg text-black hover:text-gray-600 mb-4 transition-colors duration-200 ease-in-out transform hover:scale-105">Home</Link>
            <Link href="#" className="text-lg text-black hover:text-gray-600 mb-4 transition-colors duration-200 ease-in-out transform hover:scale-105">About</Link>
            {/* <Link
  href="#"
  className="text-lg text-black hover:text-gray-600 mb-4 transition-colors duration-200 ease-in-out transform hover:scale-105"
>
  Gallery
</Link> */}
            <Link href="#" className="text-lg text-black hover:text-gray-600 mb-4 transition-colors duration-200 ease-in-out transform hover:scale-105">Press</Link>
            <Link href="#" className="text-lg text-black hover:text-gray-600 mb-4 transition-colors duration-200 ease-in-out transform hover:scale-105">Contact</Link>

            {[
              { title: "Gallery", items: ["Timeline", "Election Rally", "Government Events"] },
              { title: "Press", items: ["News", "Interviews", "Editorials", "Critic", "Press Release"] },
              { title: "My Views", items: ["Quotes", "Blogs", "Articles"] },
              { title: "Explore", items: ["Discover", "Trending", "Popular", "Featured", "Recommended"] },
              { title: "Events", items: ["Latest", "Upcoming Events"] },
              { title: "Latest Press", items: [] }, // Add items if necessary
            ].map(({ title, items }, index) => (
              <div key={index} className="w-full mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg hover:text-gray-600 transition-colors duration-200 ease-in-out">
                    {title}
                  </span>
                  {renderToggleButton(title)}
                </div>
                {expandedSections[title] && (
                  <div className="m-0 py-[10px]">
                    {items.map((item, idx) => (
                      <Link href="#" key={idx} className="text-md hover:text-gray-600 mb-2 block">
                        {item}
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