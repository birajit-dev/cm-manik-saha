"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  FaDotCircle,
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
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);
  const [beds, setBeds] = useState<Set<string>>(new Set([]));
  const [amenities, setAmenities] = useState<Set<string>>(new Set([]));
  const [city, setCity] = useState("");
  const [apartmentType, setApartmentType] = useState<Set<string>>(new Set([]));
  const [baths, setBaths] = useState<Set<string>>(new Set([]));
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isLoading, setIsLoading] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [value, setValue] = React.useState([500, 1000]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);

    const searchParams = {
      city,
      apartmentType: Array.from(apartmentType),
      beds: Array.from(beds),
      baths: Array.from(baths),
      priceRange,
      amenities: Array.from(amenities),
    };

    try {
      const response = await axios.post(
        "https://apluslocators.com/api/v2/web/searchproperty",
        searchParams
      );
      setSearchResults(response.data.data);
      console.log("Search results:", response.data.data);
    } catch (error) {
      console.error("Error fetching search results", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkerClick = (property: any) => {
    setSelectedProperty(property.id);
  };

  const onLoad = (map) => {
    const featureLayer = map.getFeatureLayer("LOCALITY");

    // Define the style for the feature layer
    const featureStyleOptions = {
      strokeColor: "#810FCB",
      strokeOpacity: 1.0,
      strokeWeight: 3.0,
      fillColor: "#810FCB",
      fillOpacity: 0.5,
    };

    // Apply style based on place ID
    featureLayer.style = (options) => {
      // if (options.feature.placeId === placeId) {
      //   return featureStyleOptions;
      // }
      if (options.feature.placeId === "ChIJjQmTaV0E9YgRC2MLmS_e_mY") {
        return featureStyleOptions;
      }
    };
  };

  if (!isClient) {
    return null; // or a loading indicator
  }

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
            onSelectionChange={(value) => setCity(value as string)}
            defaultItems={cityAndCounty}
            onInputChange={(value) => {
              const filteredItems = cityAndCounty.filter((item) =>
                item.label.toLowerCase().includes(value.toLowerCase())
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
            {(item) => (
              <AutocompleteItem
                key={item.label}
                value={item.label}
                className="font-bold text-base rounded-2xl max-w-[300px]"
              >
                {item.label}
              </AutocompleteItem>
            )}
          </Autocomplete>

          <Select
            key="apartment-type"
            color="default"
            variant="faded"
            selectedKeys={apartmentType}
            onSelectionChange={(keys) => setApartmentType(keys as Set<string>)}
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
            selectedKeys={beds}
            onSelectionChange={(keys) => setBeds(keys as Set<string>)}
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
            key="baths"
            color="default"
            variant="faded"
            selectedKeys={baths}
            onSelectionChange={(keys) => setBaths(keys as Set<string>)}
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
              {priceRange[0] !== 0 || priceRange[1] !== 5000
                ? `$${priceRange[0].toLocaleString()} - $${priceRange[1].toLocaleString()}`
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
                    value={priceRange}
                    maxValue={5000}
                    minValue={500}
                    onChange={(newValue) => setPriceRange(newValue as number[])}
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
            key="amenities"
            color="default"
            variant="faded"
            selectedKeys={amenities}
            onSelectionChange={(keys) => setAmenities(keys as Set<string>)}
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
            onClick={handleSearch}
            disabled={isLoading}
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

      <div className="flex flex-col md:flex-row h-[calc(100vh-200px)]"> {/* Adjust the height as needed */}
        {/* Property List on the Left Side */}
        <div className="w-full md:w-2/3 p-4 overflow-y-auto" id="propertyList">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            {searchResults.map((property, index) => (
              <div
                key={property.id}
                id={`property-${property.id}`}
                className={`border rounded-lg shadow-md overflow-hidden ${
                  selectedProperty === property.id ? "border-blue-500" : ""
                }`}
                onClick={() => handleMarkerClick(property)}
              >
                <div className="relative">
                  <img
                    src={`https://apluslocators.com/photos/property/${property.property_features_image}`}
                    alt={property.property_tittle}
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
                      setSearchResults((prevResults) =>
                        prevResults.map((prevProperty) =>
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
                    ${property.property_bed_1_price?.toLocaleString() ?? 'N/A'} - ${property.property_bed_3_price?.toLocaleString() ?? 'N/A'}
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
                    {property.property_address}
                  </div>
                  <h6 className="text-sm font-bold text-gray-800">
                    {property.property_tittle}
                  </h6>{" "}
                  {/* Updated font size and weight */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map on the Right Side */}
        <div className="w-full md:w-1/2 h-full sticky top-0">
          <LoadScript googleMapsApiKey="AIzaSyD_e9oLPJPgTHLfcua98DZXFmHt_r2lMOI">
            <GoogleMap
              key={searchResults.map((property) => property.id).join("-")} // Force refresh the map whenever searchResults change
              mapContainerStyle={{ height: "100%", width: "100%" }}
              center={{ lat: 33.749, lng: -84.388 }}
              zoom={12}
              options={{
                mapTypeId: "roadmap",
                mapId: "a3efe1c035bad51b", // Your Map ID
                tilt: 45, // Add tilt for 3D effect
                heading: 0, // Initial heading
                mapTypeControl: true,
                streetViewControl: true,
                fullscreenControl: true,
                zoomControl: true,
                scaleControl: true,
                rotateControl: true,
                clickableIcons: true,
                disableDoubleClickZoom: false,
                draggable: true,
                keyboardShortcuts: true,
                scrollwheel: true,
                styles: [], // You can add custom map styles here
              }}
              onLoad={(map) => {
                onLoad(map);
                if (map && typeof map.setTilt === 'function') {
                  map.setTilt(45); // Ensure 3D tilt is applied
                }
              }}
            >
              {searchResults.length > 0 && (
                <>
                  {/* Render Polygon */}
                  <Polygon
                    key={`polygon-${searchResults
                      .map((property) => property.id)
                      .join("-")}`}
                    paths={searchResults
                      .filter(
                        (property) =>
                          property.property_latitude &&
                          property.property_longitude
                      )
                      .map((property) => ({
                        lat: parseFloat(property.property_latitude),
                        lng: parseFloat(property.property_longitude),
                      }))}
                    options={{
                      strokeColor: "#191414", // Styled boundary color
                      strokeOpacity: 0.8, // Styled boundary opacity
                      strokeWeight: 3, // Styled boundary weight
                      fillOpacity: 0.0, // Styled fill opacity
                    }}
                  />

                  {/* Render Circles */}
                  {searchResults
                    .filter(
                      (property) =>
                        property.property_latitude &&
                        property.property_longitude
                    )
                    .map((property) => (
                      <Circle
                        key={`circle-${property.id}-${property.property_latitude}-${property.property_longitude}`} // Unique key for each circle
                        center={{
                          lat: parseFloat(property.property_latitude),
                          lng: parseFloat(property.property_longitude),
                        }}
                        radius={80} // Reduced radius
                        options={{
                          strokeColor: "#FF0000",
                          strokeOpacity: 0.8,
                          strokeWeight: 0.2,
                          fillColor: "#FF0000",
                          fillOpacity: 1,
                        }}
                      />
                    ))}
                </>
              )}

              {searchResults.map((property) => (
                <Marker
                  key={property.id}
                  position={{
                    lat: parseFloat(property.property_latitude),
                    lng: parseFloat(property.property_longitude),
                  }}
                  onClick={() => {
                    handleMarkerClick(property);
                    const propertyElement = document.getElementById(`property-${property.id}`);
                    if (propertyElement) {
                      propertyElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  icon={{
                    url:
                      hoveredProperty === property.id
                        ? "https://png.pngtree.com/png-vector/20220722/ourmid/pngtree-home-pin-map-location-icon-marker-png-image_6032844.png"
                        : "https://png.pngtree.com/png-vector/20220722/ourmid/pngtree-home-pin-map-location-icon-marker-png-image_6032844.png",
                    scaledSize: new window.google.maps.Size(50, 50),
                  }}
                >
                  {selectedProperty === property.id && (
                    <InfoWindow
                      position={{
                        lat: parseFloat(property.property_latitude),
                        lng: parseFloat(property.property_longitude),
                      }}
                      onCloseClick={() => setSelectedProperty(null)}
                    >
                      <div className="border rounded-lg shadow-md overflow-hidden">
                        <img
                          src={`https://apluslocators.com/photos/property/${property.property_features_image}`}
                          alt={property.property_tittle}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h6 className="font-bold">
                            {property.property_tittle}
                          </h6>
                          <p>{property.property_address}</p>
                          <p>
                            $
                            {property.property_bed_1_price?.toLocaleString() ??
                              "N/A"}{" "}
                            - $
                            {property.property_bed_3_price?.toLocaleString() ??
                              "N/A"}
                          </p>
                          <p>
                            {property.bedSize} Bedroom - {property.bathSize}{" "}
                            Bathroom
                          </p>
                          <p>
                            Distance Radius: {property.distance_radius} miles
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
