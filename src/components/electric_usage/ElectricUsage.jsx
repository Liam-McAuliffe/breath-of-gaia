import { useEffect, useCallback } from 'react';
import { FaCar } from 'react-icons/fa';

const ElectricUsage = ({ address, zipcode, electricData, setElectricData }) => {
  const memoizedSetElectricData = useCallback(setElectricData, [
    setElectricData,
  ]);

  const requestElectricUsage = async () => {
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
        state: data.state_name,
        estimatedUsage: data.est_usage,
        estimatedBillRange: data.est_bill_amount,
        averageCost: data.avg_cost,
        monthlyGraphData: data.graph_data,
      };

      console.log('Formatted Electricity Estimation:', result);
      memoizedSetElectricData(result);
    } catch (err) {
      console.error('Electricity Estimation Error:', err);
      throw err;
    }
  };

  useEffect(() => {
    if (address && zipcode) {
      requestElectricUsage();
    }
  }, [address, zipcode]);

  return (
    <div className="electric-usage data-section">
      <h2>Your Home’s Estimated Electric Usage</h2>
      <div className="usage-info">
        <p>
          <strong>Yearly Usage:</strong> {electricData.estimatedUsage} kWh
          <p>
            Roughly{' '}
            <strong>
              <a
                href="https://ev-database.org/car/1991/Tesla-Model-3"
                className="info"
                target="_blank"
              >
                {Math.round(electricData.estimatedUsage / 57.5)} Tesla Model 3s{' '}
                <FaCar className="inline-icon" />
              </a>
            </strong>{' '}
            worth of energy!
          </p>
        </p>
        <p>
          <strong>Estimated Monthly Bill:</strong> $
          {electricData.estimatedBillRange.min} - $
          {electricData.estimatedBillRange.max}
        </p>
        <p>
          <strong>Average Cost per kWh:</strong> ${electricData.averageCost}
        </p>
      </div>
    </div>
  );
};

export default ElectricUsage;
