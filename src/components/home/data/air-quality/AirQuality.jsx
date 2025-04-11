import { useState, useEffect } from 'react';

import AirQualityIndicator from './AirQualityIndicator.jsx';

const requestAirQuality = async (latitude, longitude, setAirQualityData) => {
  const response = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=carbon_monoxide,carbon_dioxide,nitrogen_dioxide,sulphur_dioxide,ozone,methane&timezone=auto`
  );
  const result = await response.json();
  const currentLevels = result.current;
  console.log(currentLevels);
  setAirQualityData({
    carbon_monoxide: currentLevels.carbon_monoxide,
    carbon_dioxide: currentLevels.carbon_dioxide,
    ozone: currentLevels.ozone,
    methane: currentLevels.methane,
  });
};

const AirQuality = ({ latitude, longitude }) => {
  const [airQualityData, setAirQualityData] = useState({
    carbon_monoxide: null,
    carbon_dioxide: null,
    ozone: null,
    methane: null,
  });

  useEffect(() => {
    if (latitude && longitude) {
      requestAirQuality(latitude, longitude, setAirQualityData);
    }
  }, [latitude, longitude]);

  return (
    <div
      className="bg-white p-[var(--space-lg)] rounded-[var(--radius-lg)] shadow-md transition-transform duration-300 
                 border-t-4 border-[var(--color-bg)] opacity-0 animate-fadeSlideUp hover:shadow-lg"
    >
      <h2
        className="text-[var(--color-primary)] font-bold text-[1.5rem] mt-0 
                   border-b-2 border-[var(--color-secondary)] pb-[var(--space-sm)] mb-[var(--space-md)]"
      >
        Current Air Quality in Your Area
      </h2>
      <ul className="">
        <li className="mb-[var(--space-sm)] font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
          <strong className="text-[var(--color-bg-dark)]">
            Carbon Monoxide:
          </strong>{' '}
          {airQualityData.carbon_monoxide} μg/m³{' '}
          <a
            href="https://www.epa.gov/indoor-air-quality-iaq/carbon-monoxides-impact-indoor-air-quality"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <AirQualityIndicator
              airQuality={airQualityData.carbon_monoxide}
              type="carbon_monoxide"
            />
          </a>
        </li>
        <li className="mb-[var(--space-sm)] font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
          <strong className="text-[var(--color-bg-dark)]">
            Carbon Dioxide:
          </strong>{' '}
          {airQualityData.carbon_dioxide} ppm{' '}
          <a
            href="https://www.fsis.usda.gov/sites/default/files/media_file/2020-08/Carbon-Dioxide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <AirQualityIndicator
              airQuality={airQualityData.carbon_dioxide}
              type="carbon_dioxide"
            />
          </a>
        </li>
        <li className="mb-[var(--space-sm)] font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
          <strong className="text-[var(--color-bg-dark)]">Ozone:</strong>{' '}
          {airQualityData.ozone} μg/m³{' '}
          <a
            href="https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <AirQualityIndicator
              airQuality={airQualityData.ozone}
              type="ozone"
            />
          </a>
        </li>
        <li className="mb-[var(--space-sm)] font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
          <strong className="text-[var(--color-bg-dark)]">Methane:</strong>{' '}
          {airQualityData.methane} ppb{' '}
          <a
            href="https://www.ccacoalition.org/short-lived-climate-pollutants/methane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <AirQualityIndicator
              airQuality={airQualityData.methane}
              type="methane"
            />
          </a>
        </li>
      </ul>
      <p className="font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)] mt-[var(--space-md)]">
        These levels are based on real-time data from your location.
      </p>
    </div>
  );
};
export default AirQuality;
