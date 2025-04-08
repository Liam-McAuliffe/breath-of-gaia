import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import { Helmet } from 'react-helmet';

import './App.css';
import '../../theme-variables.css';

import Topbar from '../topbar/Topbar';
import LocationForm from '../location_form/LocationForm';
import ElectricUsage from '../electric_usage/ElectricUsage';
import CarbonUsage from '../carbon_usage/CarbonUsage';
import AirQuality from '../air_quality/AirQuality';
import ResourcesSection from '../resources_selection/ResourcesSelection';
import Chart from '../chart/Chart';

import { useState, useMemo, useCallback } from 'react';

function App() {
  const [formData, setFormData] = useState({
    address: '',
    zipCode: '',
    state: '',
    latitude: null,
    longitude: null,
    submitted: false,
  });

  const [electricData, setElectricData] = useState({
    estimatedUsage: 0,
    estimatedBillRange: { min: 0, max: 0 },
    averageCost: 0,
    monthlyGraphData: [],
  });

  const [carbonData, setCarbonData] = useState({
    carbonlb: 0,
    monthlyGraphData: [],
  });

  const [airQualityData, setAirQualityData] = useState({
    carbon_monoxide: 0,
    carbon_dioxide: 0,
    ozone: 0,
    methane: 0,
  });

  // Memoize airQualityData to prevent unnecessary rerenders
  const memoizedAirQualityData = useMemo(
    () => airQualityData,
    [airQualityData]
  );

  // Example of wrapping an event handler with useCallback
  const handleSetFormData = useCallback((newFormData) => {
    setFormData(newFormData);
  }, []);

  return (
    <div className="app-container">
      <Helmet>
        <title>Home - MyHomeImpact</title>
        <meta name="description" content="Homepage description" />
      </Helmet>
      <header className="app-header">
        <Topbar />
      </header>
      <LocationForm formData={formData} setFormData={handleSetFormData} />
      {formData.submitted && (
        <main className="app-main">
          <section className="data-sections">
            <ElectricUsage
              electricData={electricData}
              setElectricData={setElectricData}
              address={formData.address}
              zipcode={formData.zipCode}
            />
            <CarbonUsage
              state={formData.state}
              electricMonthlyGraphData={electricData.monthlyGraphData}
              carbonData={carbonData}
              setCarbonData={setCarbonData}
            />
            <AirQuality
              latitude={formData.latitude}
              longitude={formData.longitude}
              airQualityData={memoizedAirQualityData}
              setAirQualityData={setAirQualityData}
            />
          </section>

          <section className="chart-section">
            <Chart
              electricMonthlyGraphData={electricData.monthlyGraphData}
              carbonMonthlyGraphData={carbonData.monthlyGraphData}
            />
          </section>
        </main>
      )}

      <ResourcesSection />
      <footer className="app-footer">
        Created by Liam McAuliffe
        <WebsiteCarbonBadge
          co2="0.06"
          percentage="95"
          dark="true"
          url="myhomeimpact-info"
        />
      </footer>
    </div>
  );
}

export default App;
