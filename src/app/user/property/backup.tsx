"use client";
import React, { useState, useEffect } from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
  Circle,
  Polygon,
} from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
import { Slider } from "@nextui-org/react";
import { animals } from "./data";
import { propertyTypes } from "./type_data";
import { cityAndCounty } from "./city_county_data";
import {
  Select,
  SelectItem,
  Input,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  FaBed,
  FaBuilding,
  FaMinus,
  FaDotCircleO,
  FaBath,
  FaMapMarkerAlt,
  FaDollarSign,
  FaHome,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { CityIcon } from "./MailIcon";

const PropertyPage = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "3390 Stratford Rd NE",
      address: "3859 Allegretto Cir # 121, Atlanta, GA 30339",
      price: 1200,
      lastUpdated: "2023-10-01",
      bedSize: "2",
      bathSize: "2",
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
      lat: 33.8487,
      lng: -84.3733,
      liked: false,
    },
    {
      id: 2,
      name: "3390 Stratford Rd NE",
      address: "1335 Creek View Ln NW, Atlanta, GA 30318",
      price: 2710,
      lastUpdated: "2023-09-15",
      bedSize: "1",
      bathSize: "1",
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
      lat: 33.7906,
      lng: -84.4114,
      liked: false,
    },
    {
      id: 3,
      name: "3390 Stratford Rd NE",
      address: "1335 Creek View Ln NW, Atlanta, GA 30318",
      price: 2710,
      lastUpdated: "2023-09-15",
      bedSize: "1",
      bathSize: "1",
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
      lat: 33.7849,
      lng: -84.388,
      liked: false,
    },
  ]);


  const SearchSection = () => {
    const [city, setCity] = useState("");
    const [apartmentType, setApartmentType] = useState(new Set([]));
    const [beds, setBeds] = useState(new Set([]));
    const [baths, setBaths] = useState(new Set([]));
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [isLoading, setIsLoading] = useState(false);
    //const [openSlider, setOpenSlider] = useState(false);
    const [searchResults, setSearchResults] = useState<any[]>([]);
  
    const handleSearch = async () => {
      setIsLoading(true);
  
      const searchParams = {
        city,
        apartmentType: Array.from(apartmentType),
        beds: Array.from(beds),
        baths: Array.from(baths),
        priceRange,
      };
  
      try {
        // Replace with your actual API endpoint
        const response = await axios.post("http://localhost:4000/api/v2/web/searchproperty", searchParams);
  
        // Handle API response data
        setSearchResults(response.data.data);
        console.log("Search results:", response.data.data);
        return response.data.data; // Return the response data
      } catch (error) {
        console.error("Error fetching search results", error);
        setSearchResults([]);
        throw error; // Re-throw the error to be handled by the caller if needed
      } finally {
        setIsLoading(false);
      }
    };

  
  const [selectedProperty, setSelectedProperty] = useState(null);

  












  const [searchParams, setSearchParams] = useState({
    priceRange: [100000, 500000],
    city: "",
    county: "",
    propertyType: "",
    amenities: [],
    bedSize: "",
    bathSize: "",
    location: "",
  });

  const [showBedOptions, setShowBedOptions] = useState(false);
  const [showBathOptions, setShowBathOptions] = useState(false);
  const [showAmenitiesOptions, setShowAmenitiesOptions] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);
  const [value, setValue] = React.useState([500, 1000]);

  const handleMarkerClick = (property) => {
    setSelectedProperty(property.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (event, newValue) => {
    setSearchParams((prev) => ({ ...prev, priceRange: newValue }));
  };

  const handleBedSelect = (size) => {
    setSearchParams((prev) => ({ ...prev, bedSize: size }));
    setShowBedOptions(false);
  };

  const handleBathSelect = (size) => {
    setSearchParams((prev) => ({ ...prev, bathSize: size }));
    setShowBathOptions(false);
  };

  const handleAmenitiesSelect = (amenity) => {
    setSearchParams((prev) => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities };
    });
  };

  const handleInputFocus = () => {
    setShowAmenitiesOptions(false);
  };

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      const amenitiesInput = document.getElementById("amenities-input");
      if (amenitiesInput && !amenitiesInput.contains(event.target)) {
        setShowAmenitiesOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  

  return (
    <div className="flex flex-col h-screen">
      {/* Search Bar */}
      <div className="p-4 bg-white shadow-md rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <FaSearch className="mr-2" /> Search Properties
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <Autocomplete
            classNames={{
              base: "w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[350px] h-[52px] border-2 border-black rounded-2xl",
              mainWrapper: "h-full",
              input: "text-base font-bold",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            startContent={<SearchIcon size={18} />}
            defaultItems={properties}
            onInputChange={(value) => {
              const filteredItems = properties.filter((property) =>
                property.name.toLowerCase().includes(value.toLowerCase())
              );
              return filteredItems;
            }}
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "16px",
              maxWidth: "300px",
            }}
          >
            {cityAndCounty.map((cityAndCounty) => (
              <AutocompleteItem
                key={cityAndCounty.label}
                value={cityAndCounty.label}
                className="font-bold text-base rounded-2xl max-w-[300px]"
              >
                {cityAndCounty.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          <Select
            key="apartment-type"
            color="default"
            variant="faded"
            label={
              <span
                style={{
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Apartment Type
              </span>
            }
            selectionMode="multiple"
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[200px] rounded-2xl"
            style={{
              border: "2px solid black",
              borderRadius: "16px",
            }}
          >
            {propertyTypes.map((propertyType) => (
              <SelectItem
                key={propertyType.key}
                textValue={propertyType.label}
                className="text-center text-3xl"
              >
                <div className="flex items-center text-center">
                  <FaHome className="mr-2" />
                  <div className="font-bold text-center text-base">
                    {propertyType.label}
                  </div>
                </div>
              </SelectItem>
            ))}
          </Select>

          <Select
            key="beds"
            color="default"
            variant="faded"
            label={
              <span
                style={{
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Beds
              </span>
            }
            selectionMode="multiple"
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[100px] rounded-2xl"
            style={{
              border: "2px solid black",
              borderRadius: "16px",
            }}
          >
            {["1", "2", "3+", "Studio"].map((option) => (
              <SelectItem
                key={option}
                textValue={option}
                className="text-center text-3xl"
              >
                <div className="flex text-center">
                  <div className="font-bold text-center text-base	">
                    {option}
                  </div>
                </div>
              </SelectItem>
            ))}
          </Select>

          <Select
            key="beds"
            color="default"
            variant="faded"
            label={
              <span
                style={{
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Baths
              </span>
            }
            selectionMode="multiple"
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[100px] rounded-2xl"
            style={{
              border: "2px solid black",
              borderRadius: "16px",
            }}
            itemStyles={{
              base: "py-2 px-3 rounded-lg transition-colors text-center",
              focus: "bg-primary-100 text-center",
              selected: "bg-primary-200 text-primary-foreground text-center",
            }}
          >
            {["1", "2", "3+"].map((option) => (
              <SelectItem
                key={option}
                textValue={option}
                className="text-center text-3xl"
              >
                <div className="flex text-center">
                  <div className="font-bold text-center text-base	">
                    {option}
                  </div>
                </div>
              </SelectItem>
            ))}
          </Select>

          <div className="relative w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[150px]">
            <Button
              onClick={() => setOpenSlider(!openSlider)}
              className="w-full rounded-2xl h-[56px] text-black"
              style={{
                border: "2px solid black",
                borderRadius: "16px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {value.length > 0 && (value[0] !== 0 || value[1] !== 5000)
                ? `$${value[0].toLocaleString()} - $${value[1].toLocaleString()}`
                : "Price"}
            </Button>
            {openSlider && (
              <div
                className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-md w-[300px] z-10"
                ref={(node) => {
                  if (node) {
                    const handleClickOutside = (event: MouseEvent) => {
                      if (node && !node.contains(event.target as Node)) {
                        setOpenSlider(false);
                      }
                    };
                    document.addEventListener("mousedown", handleClickOutside);
                    return () => {
                      document.removeEventListener(
                        "mousedown",
                        handleClickOutside
                      );
                    };
                  }
                }}
              >
                <div className="p-4 w-full">
                  <Slider
                    label="Select a budget"
                    formatOptions={{ style: "currency", currency: "USD" }}
                    step={10}
                    maxValue={5000}
                    minValue={500}
                    value={value}
                    onChange={(newValue) =>
                      setValue(
                        Array.isArray(newValue)
                          ? newValue
                          : [newValue, newValue]
                      )
                    }
                    className="w-full"
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <Select
            key="apartment-type"
            color="default"
            variant="faded"
            label={
              <span
                style={{
                  color: "#1a1a1a",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Amenities
              </span>
            }
            selectionMode="multiple"
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[200px] rounded-2xl"
            style={{
              border: "2px solid black",
              borderRadius: "16px",
            }}
          >
            {animals.map((animal) => (
              <SelectItem
                key={animal.key}
                textValue={animal.label}
                className="text-center text-3xl"
              >
                <div className="flex items-center text-center">
                  <FaHome className="mr-2" />
                  <div className="font-bold text-center text-base">
                    {animal.label}
                  </div>
                </div>
              </SelectItem>
            ))}
          </Select>

          <Button
            color="primary"
            className="w-full sm:w-auto rounded-2xl h-[52px] px-8"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              backgroundColor: "#000000",
              color: "#FFFFFF",
              border: "2px solid black",
              borderRadius: "16px",
            }}
          >
            <FaSearch className="mr-2" />
            Search
          </Button>
        </div>
      </div>








































      

      <div className="flex flex-col md:flex-row flex-1">
        {/* Property List on the Left Side */}
        <div className="w-full md:w-2/3 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className={`border rounded-lg shadow-md overflow-hidden ${
                  selectedProperty === property.id ? "border-blue-500" : ""
                }`}
                onClick={() => handleMarkerClick(property)}
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 sm:h-60 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`absolute bottom-2 right-2 text-3xl ${
                      property.liked ? "text-red-500" : "text-white"
                    }`}
                    style={{
                      cursor: "pointer",
                      border: "2px solid white",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setProperties((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === property.id
                            ? { ...prevProperty, liked: !prevProperty.liked }
                            : prevProperty
                        )
                      );
                    }}
                  />
                </div>

                <div className="p-4">
                  <div className="text-sm text-green-500 font-bold mb-2 flex items-center">
                    <div
                      className="rounded-full bg-green-500 mr-1"
                      style={{ width: "10px", height: "10px" }}
                    ></div>
                    Apartment for Rent
                  </div>
                  <div className="text-2xl font-bold mb-1">
                    ${property.price.toLocaleString()} - $
                    {property.price.toLocaleString()}
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-sm text-gray-700 mb-2">
                    <div className="text-gray-500 flex items-center">
                      <FaBed className="mr-1" />
                      {property.bedSize} Bedroom -{" "}
                      <FaBath className="mr-2" style={{ paddingLeft: "5px" }} />{" "}
                      {property.bathSize} Bathroom
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    {property.address}
                  </div>
                  <h6 className="text-sm font-bold text-gray-800">
                    {property.name}
                  </h6>{" "}
                  {/* Updated font size and weight */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map on the Right Side */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto">
          <LoadScript googleMapsApiKey="AIzaSyD_e9oLPJPgTHLfcua98DZXFmHt_r2lMOI">
            <GoogleMap
              mapContainerStyle={{ height: "100vh", width: "100%" }}
              center={{ lat: 33.749, lng: -84.388 }} // Atlanta center
              zoom={12} // Zoom level
              options={{
                mapTypeId: "roadmap", // Use roadmap or terrain map
              }}
            >
              {/* Drawing Polygon based on properties' lat/lng */}
              <Polygon
                paths={properties.map((property) => ({
                  lat: property.lat,
                  lng: property.lng,
                }))}
                options={{
                  strokeColor: "#000000", // Black boundary as in the image
                  strokeOpacity: 1.0,
                  strokeWeight: 2,
                  fillOpacity: 0, // No fill, just boundary
                }}
              />

              {/* Circles for properties */}
              {properties.map((property) => (
                <Circle
                  key={property.id}
                  center={{ lat: property.lat, lng: property.lng }}
                  radius={500} // Example radius
                  options={{
                    strokeColor: "#9c27b0", // Purple color
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                    fillColor: "#9c27b0",
                    fillOpacity: 0.6,
                  }}
                  onClick={() => handleMarkerClick(property)}
                />
              ))}

              {/* Markers */}
              {properties.map((property) => (
                <Marker
                  key={property.id}
                  position={{ lat: property.lat, lng: property.lng }}
                  onClick={() => handleMarkerClick(property)}
                >
                  {selectedProperty === property.id && (
                    <InfoWindow
                      position={{ lat: property.lat, lng: property.lng }}
                      onCloseClick={() => handleMarkerClick(null)}
                    >
                      <div className="border rounded-lg shadow-md overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                          <h6>{property.name}</h6>
                          <p>{property.address}</p>
                          <p>${property.price.toLocaleString()}</p>
                          <p>
                            {property.bedSize} Bedroom - {property.bathSize}{" "}
                            Bathroom
                          </p>
                        </div>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
