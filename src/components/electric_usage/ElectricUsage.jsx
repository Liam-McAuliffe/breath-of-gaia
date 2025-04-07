import { useEffect } from 'react';

const ElectricUsage = ({ address, zipcode, electricData, setElectricData }) => {
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
      setElectricData(result);
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
          <strong>Monthly Usage:</strong> {electricData.estimatedUsage} kWh
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
