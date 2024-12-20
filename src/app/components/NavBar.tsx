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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDetailsMenuOpen, setIsDetailsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={30} width={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={30} width={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={30} width={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={100} height={30} width={100} />,
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDetailsMenu = () => {
    setIsDetailsMenuOpen(!isDetailsMenuOpen);
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
          </NavbarBrand>
        </Navbar>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[65%] bg-[#5DB996] relative z-0">
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

          {/* Menu Toggle Button */}
          <div className="flex">
            <Button onClick={toggleDetailsMenu} className="p-2 bg-transparent text-white text-2xl">
              {isDetailsMenuOpen ? '✖' : '☰'}
            </Button>
          </div>

          {/* Details Menu Modal */}
          {isDetailsMenuOpen && (
            <Modal open={isDetailsMenuOpen} onClose={toggleDetailsMenu}>
              <ModalHeader className="text-xl font-bold">Details Menu</ModalHeader>
              <ModalBody>
                <NavbarContent className="flex flex-col gap-4">
                  <Link href="#" onClick={toggleDetailsMenu} className="text-base py-2">
                    Customers
                  </Link>
                  <Link href="#" onClick={toggleDetailsMenu} className="text-base py-2">
                    Integrations
                  </Link>
                  <Link href="#" onClick={toggleDetailsMenu} className="text-base py-2">
                    Login
                  </Link>
                </NavbarContent>
              </ModalBody>
              <ModalFooter>
                <Button onClick={toggleDetailsMenu}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          )}
        </Navbar>
      </div>
    </div>
  );
}
