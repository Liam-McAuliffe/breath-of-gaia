import { useEffect } from 'react';
import { FaCar } from 'react-icons/fa';

const requestElectricUsage = async (address, zipcode, setElectricData) => {
  try {
    const apiKey = import.meta.env.VITE_WATTBUY_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-api-key': apiKey,
      },
    };

    const encodedAddress = encodeURIComponent(address);
    const estimationUrl = `https://apis.wattbuy.com/v3/electricity/estimation?address=${encodedAddress}&zip=${zipcode}`;

    const response = await fetch(estimationUrl, options);
    const data = await response.json();

    const result = {
      estimatedUsage: data.est_usage,
      monthlyGraphData: data.graph_data,
    };

    console.log('Formatted Electricity Estimation:', result);
    setElectricData(result);
  } catch (err) {
    console.error('Electricity Estimation Error:', err);

    throw err;
  }
};

const ElectricUsage = ({ formData, setElectricData, electricData }) => {
  useEffect(() => {
    console.log('ElectricUsage useEffect triggered with:', formData);

    if (!formData.address || !formData.zipCode) {
      console.log('Missing address or zipCode, skipping API call');
      return;
    }

    requestElectricUsage(formData.address, formData.zipCode, setElectricData);
  }, [formData.address, formData.zipCode]);

  return (
    <div
      className="bg-white p-[var(--space-lg)] rounded-[var(--radius-lg)] shadow-md 
                 transition-transform duration-300 border-t-4 border-[var(--color-bg)]
                 opacity-0 animate-fadeSlideUp hover:shadow-lg"
    >
      <h2
        className="text-[var(--color-primary)] text-[1.5rem] font-bold
                   mt-0 border-b-2 border-[var(--color-secondary)] pb-[var(--space-sm)] mb-[var(--space-md)]"
      >
        Your Home's Estimated Electric Usage
      </h2>
      <div>
        <p className="font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
          <strong className="text-[var(--color-bg-dark)]">Yearly Usage:</strong>{' '}
          {electricData.estimatedUsage} kWh
        </p>
        <p className="font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
          Roughly{' '}
          <strong className="text-[var(--color-bg-dark)] ">
            <a
              href="https://ev-database.org/car/1991/Tesla-Model-3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2"
            >
              {Math.round(electricData.estimatedUsage / 57.5)} Tesla Model 3s{' '}
              <FaCar className="inline align-middle" />
            </a>
          </strong>{' '}
          worth of energy!
        </p>
      </div>
    </div>
  );
};

export default ElectricUsage;
