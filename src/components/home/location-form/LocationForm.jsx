import { useState } from 'react';
import './locationform.css';

const requestLocation = async (address, zipCode) => {
  const encodedText = encodeURIComponent(`${address}, ${zipCode}`);
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

const LocationForm = ({ setFormData, setSubmitted }) => {
  const [inputAddress, setInputAddress] = useState('');
  const [inputZipCode, setInputZipCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const address = inputAddress;
    const zipCode = inputZipCode;

    const location = await requestLocation(address, zipCode);

    if (address && zipCode) {
      setFormData((prev) => ({
        ...prev,
        state: location.features[0].properties.state_code,
        address: location.features[0].properties.address_line1,
        zipCode: location.features[0].properties.postcode,
        latitude: location.features[0].properties.lat,
        longitude: location.features[0].properties.lon,
      }));
      setSubmitted(true);
    }
  };
  return (
    <form
      className="flex flex-col items-center 
                 bg-[var(--color-tertiary)] 
                 p-[var(--space-xl)] px-[var(--space-md)] 
                 border-b-[3px] border-bg-dark location-form"
      onSubmit={handleSubmit}
    >
      <p
        className="text-center 
                   text-[2.5rem] font-bold 
                   font-[var(--font-family-heading)] 
                   text-[var(--color-primary)] 
                   mb-[var(--space-lg)]"
        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
      >
        Enter your address to discover your impact!
      </p>
      <div
        className="flex flex-wrap justify-center gap-[var(--space-md)] 
                   max-w-[800px] w-full"
      >
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Street Address"
          required
          onChange={(e) => setInputAddress(e.target.value)}
          className="flex-1 min-w-[200px] 
                     leading-[2.5em] 
                     rounded-[var(--radius-md)] 
                     py-[var(--space-sm)] px-[var(--space-md)] 
                     bg-white shadow-sm 
                     border border-[var(--color-secondary)] 
                     font-[var(--font-family-body)]"
        />
        <input
          id="zipcode"
          name="zipcode"
          type="text"
          pattern="[0-9]{5}"
          title="Five digit zip code"
          placeholder="ZIP Code"
          required
          onChange={(e) => setInputZipCode(e.target.value)}
          className="flex-1 min-w-[200px] 
                     leading-[2.5em] 
                     rounded-[var(--radius-md)] 
                     py-[var(--space-sm)] px-[var(--space-md)] 
                     bg-white shadow-sm 
                     border border-[var(--color-secondary)] 
                     font-[var(--font-family-body)]"
        />
        <button
          type="submit"
          className="min-w-[120px] 
                     leading-[2.5em] 
                     bg-[var(--color-button-primary)] 
                     text-[var(--color-text-light)] 
                     rounded-[var(--radius-md)] 
                     py-[var(--space-sm)] px-[var(--space-md)] 
                     font-semibold shadow-sm 
                     transition-all duration-300
                     font-[var(--font-family-body)]
                     hover:translate-y-[-2px]
                     hover:bg-[var(--color-button-hover)]
                     hover:shadow-md
                     hover:cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default LocationForm;
