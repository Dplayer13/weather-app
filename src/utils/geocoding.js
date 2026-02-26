// Reverse geocoding using OpenStreetMap Nominatim API
export const getLocationName = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
    );
    
    if (!response.ok) {
      throw new Error(`Geocoding request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    // Try to construct a readable location name
    if (data.display_name) {
      // Extract city/town/village name if available
      const address = data.address;
      let locationName = '';
      
      // Prioritize more specific location names
      if (address.city) {
        locationName = address.city;
      } else if (address.town) {
        locationName = address.town;
      } else if (address.village) {
        locationName = address.village;
      } else if (address.hamlet) {
        locationName = address.hamlet;
      } else if (address.municipality) {
        locationName = address.municipality;
      } else if (address.county) {
        locationName = address.county;
      } else if (address.state) {
        locationName = address.state;
      } else {
        // Fallback to the full display name
        locationName = data.display_name.split(',')[0]; // Take the first part
      }
      
      // Add country if it's not already included
      if (address.country && !locationName.includes(address.country)) {
        locationName += `, ${address.country}`;
      }
      
      return locationName;
    }
    
    return `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
  } catch (error) {
    console.error('Error getting location name:', error);
    return `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
  }
};