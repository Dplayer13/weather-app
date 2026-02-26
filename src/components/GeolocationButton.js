import React from 'react';

const GeolocationButton = ({ handleLocationChange, setError }) => {
  const getUserLocation = async () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await handleLocationChange(latitude, longitude);
      },
      (error) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setError("User denied the request for Geolocation");
            break;
          case error.POSITION_UNAVAILABLE:
            setError("Location information is unavailable");
            break;
          case error.TIMEOUT:
            setError("The request to get user location timed out");
            break;
          default:
            setError("An unknown error occurred");
            break;
        }
      }
    );
  };

  return (
    <div className="geolocation-button">
      <button onClick={getUserLocation}>
        Use My Current Location
      </button>
    </div>
  );
};

export default GeolocationButton;