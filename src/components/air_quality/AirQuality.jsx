import { useEffect, useCallback } from 'react';
import AirQualityIndicatior from './AirQualityIndicatior';

const AirQuality = ({
  latitude,
  longitude,
  airQualityData,
  setAirQualityData,
}) => {
  const requestAirQualityData = useCallback(async () => {
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
  }, [latitude, longitude, setAirQualityData]);

  useEffect(() => {
    requestAirQualityData();
  }, [latitude, longitude, requestAirQualityData]);

  return (
    <div className="data-section">
      <h2>Current Air Quality in Your Area</h2>
      <ul>
        <li>
          <strong>Carbon Monoxide:</strong> {airQualityData.carbon_monoxide}{' '}
          μg/m³{' '}
          <a
            href="https://www.epa.gov/indoor-air-quality-iaq/carbon-monoxides-impact-indoor-air-quality"
            target="_blank"
          >
            <AirQualityIndicatior
              airQuality={airQualityData.carbon_monoxide}
              type="carbon_monoxide"
            />
          </a>
        </li>
        <li>
          <strong>Carbon Dioxide:</strong> {airQualityData.carbon_dioxide} ppm{' '}
          <a
            href="https://www.fsis.usda.gov/sites/default/files/media_file/2020-08/Carbon-Dioxide.pdf"
            target="_blank"
          >
            <AirQualityIndicatior
              airQuality={airQualityData.carbon_dioxide}
              type="carbon_dioxide"
            />
          </a>
        </li>
        <li>
          <strong>Ozone:</strong> {airQualityData.ozone} μg/m³{' '}
          <a
            href="https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics"
            target="_blank"
          >
            <AirQualityIndicatior
              airQuality={airQualityData.ozone}
              type="ozone"
            />
          </a>
        </li>
        <li>
          <strong>Methane:</strong> {airQualityData.methane} ppb{' '}
          <a
            href="https://www.ccacoalition.org/short-lived-climate-pollutants/methane"
            target="_blank"
          >
            <AirQualityIndicatior
              airQuality={airQualityData.methane}
              type="methane"
            />
          </a>
        </li>
      </ul>
      <p>These levels are based on real-time data from your location.</p>
    </div>
  );
};

export default AirQuality;
