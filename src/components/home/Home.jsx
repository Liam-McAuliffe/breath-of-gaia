import { useState } from 'react';
import LocationForm from './location-form/LocationForm';
import ElectricUsage from './data/electric-usage/ElectricUsage';
import CarbonUsage from './data/carbon-usage/CarbonUsage';
import AirQuality from './data/air-quality/AirQuality';
import Chart from './data/chart/Chart';
import Resources from './resources/Resources';

export default function Home() {
  const [formData, setFormData] = useState({
    address: '',
    zipCode: '',
    state: '',
    latitude: null,
    longitude: null,
  });

  const [electricData, setElectricData] = useState({
    estimatedUsage: 0,
    monthlyGraphData: [],
  });

  const [carbonData, setCarbonData] = useState({
    carbonlb: 0,
    monthlyGraphData: [],
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="">
      <LocationForm setFormData={setFormData} setSubmitted={setSubmitted} />
      {submitted && (
        <div
          className="bg-bg-light relative"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233a5a40' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3Cg fill='%23588157' fill-opacity='0.05'%3E%3Ccircle cx='8' cy='35' r='3'/%3E%3Ccircle cx='52' cy='15' r='3'/%3E%3Ccircle cx='28' cy='7' r='2'/%3E%3Ccircle cx='42' cy='53' r='2'/%3E%3Ccircle cx='12' cy='22' r='1'/%3E%3Ccircle cx='45' cy='32' r='1'/%3E%3Ccircle cx='22' cy='52' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            <div className="card-animate">
              <ElectricUsage
                formData={formData}
                setElectricData={setElectricData}
                electricData={electricData}
              />
            </div>

            <div className="card-animate delay-200">
              <CarbonUsage
                electricData={electricData}
                setCarbonData={setCarbonData}
                carbonData={carbonData}
              />
            </div>

            <div className="card-animate delay-400">
              <AirQuality
                latitude={formData.latitude}
                longitude={formData.longitude}
              />
            </div>
          </div>

          <div
            className="bg-white p-[var(--space-lg)] rounded-[var(--radius-lg)] shadow-md mb-[var(--space-xl)] 
             border-t-4 border-[var(--color-accent)] card-animate delay-600 m-2 sm:m-10"
          >
            <Chart
              carbonMonthlyGraphData={carbonData.monthlyGraphData}
              electricMonthlyGraphData={electricData.monthlyGraphData}
            />
          </div>
        </div>
      )}
      <Resources />
      <style>
        {`
    .card-animate {
      opacity: 0;
      transform: translateY(30px);
      animation: cardAppear 0.8s cubic-bezier(0.13, 0.67, 0.36, 0.99) forwards;
    }
    
    .card-animate.delay-200 {
      animation-delay: 0.2s;
    }
    
    .card-animate.delay-400 {
      animation-delay: 0.4s;
    }
    
    .card-animate.delay-600 {
      animation-delay: 0.6s;
    }
    
    @keyframes cardAppear {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
      </style>
    </div>
  );
}
