'use client';
import { useState } from 'react';
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons";
import { AcmeLogo } from "./AcemeLogo.jsx";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={30} width={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={30} width={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={30} width={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col bg-[#f37216] md:flex-row w-full relative">
      {/* Right Section */}
      <div className="w-full md:w-[25%] relative z-20 flex justify-end">
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
              <span className="text-xl font-extrabold font-serif tracking-wide text-white hover:text-gray-100 transition-colors">Professor (Dr.) Manik Saha</span>
            </div>
          </NavbarBrand>
        </Navbar>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[75%] bg-[#5DB996] relative z-0">
        <Navbar className="bg-transparent">
          <NavbarContent className="hidden sm:flex gap-4" justify="center">

            <NavbarItem isActive>
              <Link 
                href="#" 
                aria-current="page" 
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200"
              >
                Home
              </Link>
            </NavbarItem>

            <NavbarItem isActive>
              <Link 
                href="#" 
                aria-current="page" 
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
                aria-label="ACME features"
                className="w-[280px] md:w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps to meet user demand, automagically, based on load."
                  startContent={icons.scale}
                >
                  Autoscaling
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues. Slow query added? We'll show you exactly where."
                  startContent={icons.activity}
                >
                  Usage Metrics
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="ACME runs on ACME, join us and others serving requests at web scale."
                  startContent={icons.flash}
                >
                  Production Ready
                </DropdownItem>
                <DropdownItem
                  key="99_uptime"
                  description="Applications stay on the grid with high availability and high uptime guarantees."
                  startContent={icons.server}
                >
                  +99% Uptime
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Overcome any challenge with a supporting team ready to respond."
                  startContent={icons.user}
                >
                  +Supreme Support
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            

            
            <NavbarItem isActive>
              <Link 
                href="#" 
                aria-current="page" 
                className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200"
              >
                Press
              </Link>
            </NavbarItem>


            
            <NavbarItem>
              <Link color="foreground" href="#" className="text-sm md:text-base"  className="text-sm md:text-base font-semibold text-white hover:text-gray-100 transition-colors tracking-wide font-serif hover:scale-105 transform duration-200">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
          

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <Button onClick={toggleMobileMenu} className="p-2 bg-transparent">
              {isMobileMenuOpen ? '✖' : '☰'}
            </Button>
          </div>









          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
              <NavbarContent className="flex flex-col gap-4">
                <Link href="#" onClick={toggleMobileMenu} className="text-base py-2">
                  Customers
                </Link>
                <Link href="#" onClick={toggleMobileMenu} className="text-base py-2">
                  Integrations
                </Link>
                <Link href="#" onClick={toggleMobileMenu} className="text-base py-2">
                  Login
                </Link>
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                        endContent={icons.chevron}
                        radius="sm"
                        variant="light"
                      >
                        Features
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu aria-label="ACME features" className="w-full">
                    <DropdownItem key="autoscaling" startContent={icons.scale}>
                      Autoscaling
                    </DropdownItem>
                    <DropdownItem key="usage_metrics" startContent={icons.activity}>
                      Usage Metrics
                    </DropdownItem>
                    <DropdownItem key="production_ready" startContent={icons.flash}>
                      Production Ready
                    </DropdownItem>
                    <DropdownItem key="99_uptime" startContent={icons.server}>
                      +99% Uptime
                    </DropdownItem>
                    <DropdownItem key="supreme_support" startContent={icons.user}>
                      +Supreme Support
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarContent>
            </div>
          )}
        </Navbar>
      </div>
    </div>
  );
}