import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData, loading, error, fetchWeatherData }) => {
  // Extract data from API response
  const { hourly, daily } = weatherData || {};
  const currentTimeIndex = new Date().getHours(); // Approximate current time index

  // Function to convert hourly rain amount to descriptive text with styling
  const getRainDescription = (rainValue) => {
    if (rainValue === undefined || rainValue === null) {
      return <span className="rain-description rain-no">No data</span>;
    } else if (rainValue <= 0) {
      return <span className="rain-description rain-no">No rain</span>;
    } else if (rainValue > 0 && rainValue <= 2) {
      return <span className="rain-description rain-light">Light rain</span>;
    } else if (rainValue > 2 && rainValue <= 10) {
      return <span className="rain-description rain-moderate">Moderate rain</span>;
    } else {
      return <span className="rain-description rain-heavy">Heavy rain</span>;
    }
  };

  // Function to convert daily precipitation sum to descriptive text with styling
  const getDailyRainDescription = (precipValue) => {
    if (precipValue === undefined || precipValue === null) {
      return <span className="rain-description rain-no">No data</span>;
    } else if (precipValue <= 0) {
      return <span className="rain-description rain-no">No rain</span>;
    } else if (precipValue > 0 && precipValue <= 5) {
      return <span className="rain-description rain-light">Light</span>;
    } else if (precipValue > 5 && precipValue <= 15) {
      return <span className="rain-description rain-moderate">Moderate</span>;
    } else {
      return <span className="rain-description rain-heavy">Heavy</span>;
    }
  };

  if (loading) {
    return (
      <div className="loading">Loading weather data...</div>
    );
  }

  if (error) {
    return (
      <div className="weather-error">
        <div className="error">Error: {error}</div>
        <button onClick={fetchWeatherData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="weather-display">
      {/* Current weather summary */}
      <div className="current-weather">
        <h2>Current Weather</h2>
        {hourly && (
          <div className="current-data">
            <div className="temp">
              <strong>Temperature :</strong> {hourly.temperature_2m[currentTimeIndex]?.toFixed(1)}°C
            </div>
            <div className="rain">
              <strong>Rain:</strong> {getRainDescription(hourly.rain[currentTimeIndex])}
            </div>
            <div className="wind-temp">
              <strong>Wind Temperature :</strong> {hourly.temperature_80m[currentTimeIndex]?.toFixed(1)}°C
            </div>
            <div className="wind-speed">
              <strong>Wind Speed :</strong> {hourly.wind_speed_10m[currentTimeIndex]?.toFixed(1)} km/h
            </div>
          </div>
        )}
      </div>

     {/* {/* Hourly forecast }
      <div className="hourly-forecast">
        <h2>Hourly Forecast</h2>
        <div className="forecast-grid">
          {hourly && hourly.time.slice(0, 24).map((time, index) => (
            <div key={index} className="forecast-item">
              <div>{new Date(time).getHours()}:00</div>
              <div>{hourly.temperature_2m[index]?.toFixed(1)}°C</div>
              <div>Rain: {getRainDescription(hourly.rain[index])}</div>
              <div>Wind: {hourly.wind_speed_10m[index]?.toFixed(1)} km/h</div>
            </div>
          ))}
        </div>
      </div>*/}

      {/* 7-day forecast */}
      <div className="daily-forecast">
        <h2>7-Day Forecast</h2>
        <div className="daily-forecast-grid">
          {daily && daily.time && daily.time.slice(0, 7).map((date, index) => (
            <div key={index} className="daily-forecast-item">
              <div className="day">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className="date">{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
              <div className="temp-max">{daily.temperature_2m_max[index]?.toFixed(1)}°</div>
              <div className="temp-min">{daily.temperature_2m_min[index]?.toFixed(1)}°</div>
              <div className="precipitation">Rain: {getDailyRainDescription(daily.precipitation_sum[index])}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;