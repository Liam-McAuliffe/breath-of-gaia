import './App.css';

import ElectricUsage from '../electric_usage/ElectricUsage';
import LocationForm from '../location_form/LocationForm';

import { useState } from 'react';

function App() {
  const [electricData, setElectricData] = useState({
    state: '',
    estimatedUsage: 0,
    estimatedBillRange: 0,
    averageCost: 0,
    monthlyGraphData: [],
  });
  const [formData, setFormData] = useState({
    address: '',
    zipCode: '',
    latitude: null,
    longitude: null,
    submitted: false,
  });

  return (
    <div className="app-container">
      <LocationForm formData={formData} setFormData={setFormData} />
      {formData.submitted && (
        <ElectricUsage
          electricData={electricData}
          setElectricData={setElectricData}
          address={formData.address}
          zipcode={formData.zipCode}
        />
      )}
    </div>
  );
}

export default App;
