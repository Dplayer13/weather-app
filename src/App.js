import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import LocationSelector from './components/LocationSelector';
import GeolocationButton from './components/GeolocationButton';
import { getLocationName } from './utils/geocoding';
import './App.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: -1.9403, lon: 29.8739 });  // Rwanda coordinates
  const [locationName, setLocationName] = useState("Rwanda");

  // Fetch weather data from Open-Meteo API
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&hourly=temperature_2m,rain,temperature_80m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=Africa%2FCairo`
      );
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      setWeatherData(data);
      
      // Get the location name based on coordinates
      const name = await getLocationName(location.lat, location.lon);
      setLocationName(name);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching weather data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLocationChange = async (lat, lon) => {
    try {
      setLocation({ lat, lon });
      // Update the location name immediately when changing location
      const name = await getLocationName(lat, lon);
      setLocationName(name);
    } catch (error) {
      console.error('Error getting location name:', error);
      setLocationName(`Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`);
    }
  };

  return (
    <div className="App">
      <div className="weather-container">
        <h1>Weather App</h1>
        
        <div className="location-info">
          <h2>{locationName}</h2>
        </div>
        
        <GeolocationButton handleLocationChange={handleLocationChange} setError={setError} />
        
        <LocationSelector handleLocationChange={handleLocationChange} />
        
        <WeatherDisplay 
          weatherData={weatherData} 
          loading={loading} 
          error={error} 
          fetchWeatherData={fetchWeatherData} 
        />
      </div>
    </div>
  );
};

export default WeatherApp;
