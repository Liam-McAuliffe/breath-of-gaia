const thresholds = {
  carbon_monoxide: [
    { limit: 4400, label: 'Good', color: '#6a994e' },
    { limit: 9400, label: 'Moderate', color: '#f9b94a' },
    { limit: 12400, label: 'Unhealthy', color: '#d68c45' },
    { limit: 15400, label: 'Very Unhealthy', color: '#a44a3f' },
    { label: 'Hazardous', color: '#5e2c28' },
  ],
  carbon_dioxide: [
    { limit: 600, label: 'Good', color: '#6a994e' },
    { limit: 1000, label: 'Moderate', color: '#f9b94a' },
    { limit: 1500, label: 'Unhealthy', color: '#d68c45' },
    { limit: 2000, label: 'Very Unhealthy', color: '#a44a3f' },
    { label: 'Hazardous', color: '#5e2c28' },
  ],
  ozone: [
    { limit: 50, label: 'Good', color: '#6a994e' },
    { limit: 100, label: 'Moderate', color: '#f9b94a' },
    { limit: 150, label: 'Unhealthy', color: '#d68c45' },
    { limit: 200, label: 'Very Unhealthy', color: '#a44a3f' },
    { label: 'Hazardous', color: '#5e2c28' },
  ],
  methane: [
    { limit: 1800, label: 'Good', color: '#6a994e' },
    { limit: 2000, label: 'Moderate', color: '#f9b94a' },
    { limit: 2200, label: 'Unhealthy', color: '#d68c45' },
    { limit: 2500, label: 'Very Unhealthy', color: '#a44a3f' },
    { label: 'Hazardous', color: '#5e2c28' },
  ],
};

const AirQualityIndicatior = ({ airQuality, type }) => {
  const getAirQualityCategory = () => {
    if (!airQuality) return { label: 'Unknown', color: '#999' };

    const pollutantThresholds = thresholds[type];
    if (!pollutantThresholds) return { label: 'Unknown', color: '#999' };

    for (const threshold of pollutantThresholds) {
      if (!threshold.limit || airQuality < threshold.limit) {
        return { label: threshold.label, color: threshold.color };
      }
    }
  };

  const { label, color } = getAirQualityCategory();

  const badgeStyle = {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '5px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    backgroundColor: color,
    marginLeft: '10px',
    border: '1px solid #ccc',
  };

  return (
    <span className="badge" style={badgeStyle}>
      {label}
    </span>
  );
};

export default AirQualityIndicatior;
