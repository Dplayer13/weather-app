# Weather App

A React-based weather application that fetches data from the Open-Meteo API. The app displays current weather conditions and forecasts, with support for multiple locations and geolocation services.

## Features

- Real-time weather data from Open-Meteo API
- Current temperature, rain, wind temperature, and wind speed
- Hourly forecasts for the next 24 hours
- 7-day daily forecasts
- Descriptive rain indicators (No rain, Light, Moderate, Heavy)
- Multiple location support
- Geolocation to get current position
- Responsive design for mobile devices
- Progressive Web App (PWA) support for mobile installation
- Dark and moody UI theme
- Actual location names instead of coordinates

## API Used

The app uses the Open-Meteo API with the following parameters:
- Latitude and Longitude coordinates
- Hourly forecasts for:
  - Temperature at 2 meters
  - Rainfall
  - Temperature at 80 meters height
  - Wind speed at 10 meters
- Daily forecasts for:
  - Maximum/minimum temperature
  - Precipitation sum
  - Weather codes

## Getting Started

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser to http://localhost:3000

## Mobile App Conversion

This app is built as a Progressive Web App (PWA), which means it can be installed on mobile devices like a native app:

1. Open the app in a mobile browser (Chrome, Firefox, Safari)
2. Tap the "Add to Home Screen" option
3. The app will be installed and can be used offline

## Deploying to Vercel

This project is ready for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically build and deploy.

Alternatively, you can deploy manually:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to complete deployment

The `vercel.json` file is already configured for this React application.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs tests
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React.js
- Open-Meteo API
- OpenStreetMap Nominatim API (for location names)
- Service Workers for PWA functionality
- CSS Grid and Flexbox for responsive design

## License

This project is open source and available under the MIT License.