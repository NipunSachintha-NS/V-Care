import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

const GarageMap = () => {
  const [location, setLocation] = useState([0, 0]);
  const [garages, setGarages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to get the device's geolocation
  const getDeviceLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation([latitude, longitude]);
          fetchNearbyGarages(latitude, longitude); // Fetch garages after getting location
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
          alert("Could not fetch your location. Please allow location access.");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  // Function to fetch nearby garages using Nominatim API
  const fetchNearbyGarages = async (latitude, longitude) => {
    const nominatimURL = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=garage&limit=10&viewbox=${
      longitude - 0.05
    },${latitude + 0.05},${longitude + 0.05},${latitude - 0.05}`;

    try {
      const response = await fetch(nominatimURL); // Use fetch instead of axios to avoid User-Agent header issues
      const data = await response.json();
      setGarages(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching nearby garages:", error);
      setLoading(false);
    }
  };

  // UseEffect to load geolocation on component mount
  useEffect(() => {
    getDeviceLocation();
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MapContainer center={location} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Marker for user's location */}
          <Marker position={location}>
            <Popup>Your Location</Popup>
          </Marker>

          {/* Markers for nearby garages */}
          {garages.map((garage, index) => (
            <Marker
              key={index}
              position={[parseFloat(garage.lat), parseFloat(garage.lon)]}
              icon={new L.Icon({
                iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png", // Custom marker icon
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })}
            >
              <Popup>
                <b>{garage.display_name}</b>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default GarageMap;
