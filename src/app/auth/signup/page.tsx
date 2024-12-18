'use client';

import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCalendar, FaMapMarkerAlt, FaBed, FaBath, FaDollarSign, FaGraduationCap, FaSwimmingPool, FaDumbbell, FaCar, FaDog, FaTshirt, FaUmbrellaBeach, FaTree, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectItem, Checkbox, Slider } from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    moveInDate: null,
    areaOfTown: '',
    state: '',
    beds: '',
    baths: '',
    priceRange: [500, 5000],
    schoolZone: '',
    amenities: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAmenityChange = (amenity: string) => {
    setFormData(prevState => ({
      ...prevState,
      amenities: prevState.amenities.includes(amenity)
        ? prevState.amenities.filter(a => a !== amenity)
        : [...prevState.amenities, amenity]
    }));
  };

  const handlePriceRangeChange = (value: number[]) => {
    setFormData(prevState => ({
      ...prevState,
      priceRange: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prevState => ({
      ...prevState,
      moveInDate: date
    }));
  };

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Personal Information</h2>
            <div className="space-y-3">
              <InputField 
                icon={<FaUser className="text-gray-600" />} 
                name="fullName" 
                placeholder="Full Name" 
                value={formData.fullName} 
                onChange={handleChange} 
              />
              <InputField 
                icon={<FaEnvelope className="text-gray-600" />} 
                name="email" 
                type="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
              />
              <InputField 
                icon={<FaPhone className="text-gray-600" />} 
                name="phone" 
                placeholder="Phone" 
                value={formData.phone} 
                onChange={handleChange} 
              />
              <InputField 
                icon={<FaLock className="text-gray-600" />} 
                name="password" 
                type="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="font-medium text-[#1db954] hover:text-[#1ed760] transition duration-200">
                  Log in here
                </Link>
              </p>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Move-in Details</h2>
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendar className="text-gray-600" />
                </div>
                <DatePicker
                  selected={formData.moveInDate}
                  onChange={handleDateChange}
                  placeholderText="Select Move-in Date"
                  className="w-full pl-10 pr-3 py-2 bg-white border-2 border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#1db954] focus:ring-1 focus:ring-[#1db954] text-gray-800"
                />
              </div>
              <InputField icon={<FaMapMarkerAlt className="text-gray-600" />} name="areaOfTown" placeholder="Area of Town" value={formData.areaOfTown} onChange={handleChange} />
              <Select
                label="Select State"
                placeholder="Select a state"
                className="max-w-xs"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <SelectItem key="CA" value="CA">California</SelectItem>
                <SelectItem key="NY" value="NY">New York</SelectItem>
                <SelectItem key="TX" value="TX">Texas</SelectItem>
                <SelectItem key="FL" value="FL">Florida</SelectItem>
                <SelectItem key="IL" value="IL">Illinois</SelectItem>
              </Select>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Property Preferences</h2>
            <div className="space-y-3">
              <InputField icon={<FaBed className="text-gray-600" />} name="beds" type="number" placeholder="Number of Bedrooms" value={formData.beds} onChange={handleChange} />
              <InputField icon={<FaBath className="text-gray-600" />} name="baths" type="number" placeholder="Number of Bathrooms" value={formData.baths} onChange={handleChange} />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <Slider
                  label="Price Range"
                  step={100}
                  minValue={500}
                  maxValue={10000}
                  value={formData.priceRange}
                  onChange={handlePriceRangeChange}
                  className="max-w-md"
                />
                <div className="mt-2 text-sm text-gray-600">
                  ${formData.priceRange[0]} - ${formData.priceRange[1]}
                </div>
              </div>
              <InputField icon={<FaGraduationCap className="text-gray-600" />} name="schoolZone" placeholder="School Zone" value={formData.schoolZone} onChange={handleChange} />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Amenities</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Pool', icon: <FaSwimmingPool /> },
                { name: 'Gym', icon: <FaDumbbell /> },
                { name: 'Parking', icon: <FaCar /> },
                { name: 'Pet Friendly', icon: <FaDog /> },
                { name: 'Laundry', icon: <FaTshirt /> },
                { name: 'Balcony', icon: <FaUmbrellaBeach /> },
                { name: 'Garden', icon: <FaTree /> },
                { name: 'Security', icon: <FaShieldAlt /> }
              ].map((amenity) => (
                <Checkbox
                  key={amenity.name}
                  isSelected={formData.amenities.includes(amenity.name)}
                  onValueChange={() => handleAmenityChange(amenity.name)}
                  color="primary"
                  className="bg-white p-2 rounded-lg flex items-center border border-[#1db954]"
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-600">{amenity.icon}</span>
                    <span className="text-gray-800">{amenity.name}</span>
                  </div>
                </Checkbox>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.amenities.length === 0) {
      alert("Please select at least one amenity before submitting.");
      return;
    }
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call or further processing here
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Find Your Dream Home</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {renderStep()}
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
                  >
                    Previous
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-[#1db954] text-white rounded-lg hover:bg-[#1ed760] transition duration-300"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1db954] text-white rounded-lg hover:bg-[#1ed760] transition duration-300"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white p-8 overflow-y-auto">
        <div className="mb-8">
          <Image
            src="/luxury-home.jpg"
            alt="Luxury Home"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Your Perfect Home</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Embark on a journey to find the home of your dreams. Our curated selection of properties offers the perfect blend of comfort, style, and luxury.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Extensive range of properties to suit every lifestyle</li>
            <li>Expert guidance throughout your home-buying journey</li>
            <li>Tailored recommendations based on your preferences</li>
            <li>Transparent process and competitive pricing</li>
          </ul>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 my-6">
            "Finding a home is not just about a roof over your head; it's about discovering a place where your story unfolds."
          </blockquote>
          <p className="text-gray-600 text-lg">
            Let us help you write the next chapter of your life in a home that truly reflects who you are.
          </p>
        </div>
      </div>
    </div>
  );
}

interface InputFieldProps {
  icon: React.ReactNode;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ icon, name, type = "text", placeholder, value, onChange }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      {icon}
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-2 bg-white border-2 border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#1db954] focus:ring-1 focus:ring-[#1db954] text-gray-800"
      required
    />
  </div>
);