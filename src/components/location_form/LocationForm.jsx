import React, { memo } from 'react';
import './locationform.css';
const LocationForm = memo(({ formData, setFormData }) => {
  const requestLocation = async () => {
    const encodedText = encodeURIComponent(
      `${formData.address}, ${formData.zipCode}`
    );
    const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodedText}&apiKey=${apiKey}`
      );
      const result = await response.json();
      console.log('API result:', result);
      return result;
    } catch (error) {
      console.error('Error fetching location data:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await requestLocation();
    if (result?.features?.length > 0) {
      try {
        const coords = result.features[0].geometry.coordinates;
        const state = result.query.parsed.state;
        setFormData((prev) => ({
          ...prev,
          state,
          latitude: coords[1],
          longitude: coords[0],
          submitted: true,
        }));
      } catch (error) {
        console.error('Submit error:', error);
        alert('Address not found. Please check spelling.');
      }
    }
  };

  return (
    <form className="location-form" onSubmit={handleSubmit}>
      <p className="call-to-action">
        Enter your address to discover your impact!
      </p>
      <div className="input-container">
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Street Address"
          required
          value={formData.address || ''}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              address: e.target.value,
              submitted: false,
            }))
          }
        />
        <input
          id="zipcode"
          name="zipcode"
          type="text"
          pattern="[0-9]{5}"
          title="Five digit zip code"
          placeholder="ZIP Code"
          required
          value={formData.zipCode || ''}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              zipCode: e.target.value,
              submitted: false,
            }))
          }
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
});

export default LocationForm;
