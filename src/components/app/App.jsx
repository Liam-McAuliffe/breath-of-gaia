import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Privacy from '../footer/privacy/Privacy';
import Tos from '../footer/tos/Tos';
import ErrorPage from '../error_page/ErrorPage';

import './App.css';
import '../../theme-variables.css';
import '../../icons.css';

import Topbar from '../topbar/Topbar';
import LocationForm from '../location_form/LocationForm';
import ElectricUsage from '../electric_usage/ElectricUsage';
import CarbonUsage from '../carbon_usage/CarbonUsage';
import AirQuality from '../air_quality/AirQuality';
import ResourcesSection from '../resources_selection/ResourcesSelection';
import Chart from '../chart/Chart';
import Footer from '../footer/Footer';

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

  // Memoize carbonMonthlyGraphData to ensure stability
  const memoizedCarbonMonthlyGraphData = useMemo(
    () => carbonData.monthlyGraphData,
    [carbonData.monthlyGraphData]
  );

  // Memoize electricMonthlyGraphData to ensure stability
  const memoizedElectricMonthlyGraphData = useMemo(
    () => electricData.monthlyGraphData,
    [electricData.monthlyGraphData]
  );

  // Memoize electricData to prevent unnecessary rerenders
  const memoizedElectricData = useMemo(() => electricData, [electricData]);

  // Example of wrapping an event handler with useCallback
  const handleSetFormData = useCallback((newFormData) => {
    setFormData(newFormData);
  }, []);

  // Memoize the WebsiteCarbonBadge to prevent unnecessary rerenders
  const memoizedWebsiteCarbonBadge = useMemo(
    () => (
      <WebsiteCarbonBadge
        co2="0.06"
        percentage="95"
        dark="true"
        url="myhomeimpact-info"
      />
    ),
    []
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <Topbar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home">
              <Helmet>
                <title>Home - MyHomeImpact</title>
                <meta name="description" content="Homepage description" />
              </Helmet>

              <LocationForm
                formData={formData}
                setFormData={handleSetFormData}
              />
              {formData.submitted && (
                <main className="app-main">
                  <section className="data-sections">
                    <ElectricUsage
                      electricData={memoizedElectricData}
                      setElectricData={setElectricData}
                      address={formData.address}
                      zipcode={formData.zipCode}
                    />
                    <CarbonUsage
                      state={formData.state}
                      electricMonthlyGraphData={
                        memoizedElectricMonthlyGraphData
                      }
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
                      electricMonthlyGraphData={
                        memoizedElectricMonthlyGraphData
                      }
                      carbonMonthlyGraphData={memoizedCarbonMonthlyGraphData}
                    />
                  </section>
                </main>
              )}

              <ResourcesSection />
            </div>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer memoizedWebsiteCarbonBadge={memoizedWebsiteCarbonBadge} />
    </div>
  );
}

export default App;
