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
    <div className="electric-usage">
      {electricData ? (
        <>
          <h2>Electricity Usage Estimation for {electricData.state}</h2>
          <div className="usage-info">
            <p>
              <strong>Estimated Usage:</strong> {electricData.estimatedUsage}{' '}
              kWh
            </p>
            <p>
              <strong>Estimated Bill Range:</strong> $
              {electricData.estimatedBillRange.min} - $
              {electricData.estimatedBillRange.max}
            </p>
            <p>
              <strong>Average Cost:</strong> ${electricData.averageCost} per
              unit
            </p>
          </div>

          <div className="monthly-data">
            <h3>Monthly Graph Data</h3>
            <ul>
              {electricData.monthlyGraphData.map((point, index) => (
                <li key={index}>
                  <strong>{point.x}:</strong> {point.y} kWh
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>Loading electric usage data...</p>
      )}
    </div>
  );
};

export default ElectricUsage;
