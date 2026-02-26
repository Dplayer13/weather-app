import React from 'react';

const LocationSelector = ({ handleLocationChange }) => {
  const handleButtonClick = async (lat, lon) => {
    await handleLocationChange(lat, lon);
  };

  return (
    <div className="location-selector">
      <h3>Select Location</h3>
      <div className="location-buttons">
        <button onClick={() => handleButtonClick(-1.9441, 30.0619)}>Rwanda</button>
        <button onClick={() => handleButtonClick(52.52, 13.405)}>Berlin</button>
        <button onClick={() => handleButtonClick(40.7128, -74.006)}>New York</button>
        <button onClick={() => handleButtonClick(35.6762, 139.6503)}>Tokyo</button>
        <button onClick={() => handleButtonClick(37.7749, -122.4194)}>San Francisco</button>
        <button onClick={() => handleButtonClick(51.5074, -0.1278)}>London</button>
      </div>
    </div>
  );
};

export default LocationSelector;