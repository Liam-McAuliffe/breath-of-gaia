import { useEffect } from 'react';

const AirQuality = ({
  latitude,
  longitude,
  airQualityData,
  setAirQualityData,
}) => {
  const requestAirQualityData = async () => {
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

  useEffect(() => {
    requestAirQualityData();
  }, [latitude, longitude]);

  return (
    <div className="data-section">
      <h2>Current Air Quality in Your Area</h2>
      <ul>
        <li>
          <strong>Carbon Monoxide:</strong> {airQualityData.carbon_monoxide}{' '}
          μg/m³
        </li>
        <li>
          <strong>Carbon Dioxide:</strong> {airQualityData.carbon_dioxide} ppm
        </li>
        <li>
          <strong>Ozone:</strong> {airQualityData.ozone} μg/m³
        </li>
        <li>
          <strong>Methane:</strong> {airQualityData.methane} ppb
        </li>
      </ul>
      <p>These levels are based on real-time data from your location.</p>
    </div>
  );
};

export default AirQuality;
