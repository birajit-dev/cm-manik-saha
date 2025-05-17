// pages/map.js
'use client';
import React, { useEffect, useState } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "100vh",  // Full viewport height
  width: "100%"
};

const center = {
  lat: 33.753746,
  lng: -84.386330
};

const MapPage = () => {
  const [placeId, setPlaceId] = useState(null); // State for placeId

  useEffect(() => {
    const fetchPlaceId = async () => {
      // Replace with your API call to fetch the placeId
      const response = await fetch('/api/getPlaceId'); // Example API endpoint
      const data = await response.json();
      setPlaceId(data.placeId); // Assuming the API returns an object with placeId
    };

    fetchPlaceId();
  }, []);

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
      if (options.feature.placeId === placeId) {
        return featureStyleOptions;
      }
    };
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD_e9oLPJPgTHLfcua98DZXFmHt_r2lMOI">
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        options={{ mapId: "a3efe1c035bad51b" }} // Your Map ID
      />
    </LoadScript>
  );
};

export default MapPage;
