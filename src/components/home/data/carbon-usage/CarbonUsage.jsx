import { useEffect } from 'react';
import { FaTree } from 'react-icons/fa';

const estimateCarbonUsage = (electricData, setCarbonData) => {
  const conversionFactor = 0.85;

  const results = electricData.monthlyGraphData.map(({ x, y }) => {
    const mwh = y / 1000;
    const carbon_lb = Math.round(mwh * 1000 * conversionFactor);
    return { month: x, carbon_lb };
  });

  const totalCarbon = results.reduce((sum, cur) => sum + cur.carbon_lb, 0);

  setCarbonData({
    carbonlb: totalCarbon,
    monthlyGraphData: results,
  });
};

const CarbonUsage = ({ electricData, setCarbonData, carbonData }) => {
  useEffect(() => {
    if (
      electricData.monthlyGraphData &&
      electricData.monthlyGraphData.length > 0
    ) {
      estimateCarbonUsage(electricData, setCarbonData);
    }
  }, [electricData.monthlyGraphData]);

  return (
    <div
      className="bg-white p-[var(--space-lg)] rounded-[var(--radius-lg)] shadow-md 
                 transition-transform duration-300 border-t-4 border-[var(--color-bg)]
                 opacity-0 animate-fadeSlideUp hover:shadow-lg"
    >
      <h2
        className="text-[var(--color-primary)] font-bold text-[1.5rem] 
                   mt-0 border-b-2 border-[var(--color-secondary)] pb-[var(--space-sm)] mb-[var(--space-md)]"
      >
        Estimated Carbon Emissions from Electricity
      </h2>
      <p className="font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
        Your electricity usage results in approximately{' '}
        <strong className="text-[var(--color-bg-dark)]">
          {carbonData.carbonlb} lbs
        </strong>{' '}
        of CO₂ per year.
      </p>
      <p className="font-[var(--font-family-body)] leading-[1.6] text-[var(--color-text-dark)]">
        That's as much as{' '}
        <strong className="text-[var(--color-bg-dark)]">
          <a
            href="https://www.usda.gov/about-usda/news/blog/power-one-tree-very-air-we-breathe"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2"
          >
            {Math.round(carbonData.carbonlb / 48)} mature trees{' '}
            <FaTree className="inline align-middle" />
          </a>
        </strong>{' '}
        absorb in a year.
      </p>
    </div>
  );
};
export default CarbonUsage;
