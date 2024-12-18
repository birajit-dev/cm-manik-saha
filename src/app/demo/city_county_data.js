const API_URL = 'http://localhost:4000/api/v2/web/cityandcounty';

export const fetchCityAndCounty = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch city and county data');
    }
    const jsonResponse = await response.json();
    
    if (jsonResponse.success && Array.isArray(jsonResponse.data)) {
      return jsonResponse.data.filter(item => item !== "" && item !== "null").map(item => ({
        key: item.toLowerCase().replace(/\s+/g, '_').replace(/,/g, '_'),
        label: item,
        'aria-label': item
      }));
    } else {
      throw new Error('Invalid API response format');
    }
  } catch (error) {
    console.error('Error fetching city and county data:', error);
    
    // Default value in case of error
    return [];
  }
};

export let cityAndCounty = [];

// Initialize cityAndCounty
fetchCityAndCounty().then(data => {
  cityAndCounty = data;
});
