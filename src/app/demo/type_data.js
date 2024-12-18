const API_URL = 'http://localhost:4000/api/v2/web/property_type';

export const fetchPropertyTypes = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch property types');
    }
    const jsonResponse = await response.json();
    
    if (jsonResponse.success && Array.isArray(jsonResponse.data)) {
      return jsonResponse.data.map(label => ({
        key: label.toLowerCase().replace(/\s+/g, '_'), // Convert to lowercase and replace spaces with underscores
        label, // Keep the original label
      }));
    } else {
      throw new Error('Invalid API response format');
    }
  } catch (error) {
    console.error('Error fetching property types:', error);
    
    // Default value in case of error
    return [
    ];
  }
};

export let propertyTypes = [];

// Initialize propertyTypes
fetchPropertyTypes().then(data => {
  propertyTypes = data;
});
