import { useEffect } from 'react';

const CarbonUsage = ({
  electricMonthlyGraphData,
  carbonData,
  setCarbonData,
}) => {
  useEffect(() => {
    if (electricMonthlyGraphData && electricMonthlyGraphData.length > 0) {
      const estimateCarbonUsage = () => {
        const conversionFactor = 0.85;

        const results = electricMonthlyGraphData.map(({ x, y }) => {
          const mwh = y / 1000;
          const carbon_lb = Math.round(mwh * 1000 * conversionFactor);
          return { month: x, carbon_lb };
        });

        const totalCarbon = results.reduce(
          (sum, cur) => sum + cur.carbon_lb,
          0
        );

        setCarbonData({
          carbonlb: totalCarbon,
          monthlyGraphData: results,
        });
      };

      estimateCarbonUsage();
    }
  }, [electricMonthlyGraphData, setCarbonData]);

  return (
    <div className="data-section">
      <h2>Estimated Carbon Emissions from Electricity</h2>
      <p>
        Your electricity usage results in approximately{' '}
        <strong>{carbonData.carbonlb} lbs</strong> of CO₂ per year.
      </p>
      <p>
        Thats as much as{' '}
        <strong>
          {' '}
          <a
            className="info"
            href="https://www.usda.gov/about-usda/news/blog/power-one-tree-very-air-we-breathe"
            target="_blank"
          >
            {Math.round(carbonData.carbonlb / 48)} mature trees
          </a>
        </strong>{' '}
        absorb in a year.
      </p>
    </div>
  );
};

export default CarbonUsage;
