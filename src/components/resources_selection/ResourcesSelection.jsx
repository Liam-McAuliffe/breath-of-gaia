import { useState } from 'react';
import './resources.css';

const ResourcesSection = () => {
  const [expandedResources, setExpandedResources] = useState([]);

  const resources = [
    {
      id: 1,
      title: 'Energy Efficiency',
      description: 'Tips and programs to reduce home energy consumption',
      content: [
        {
          heading: 'Home Energy Audit',
          text: 'Schedule a professional energy audit to identify specific improvements for your home. Many utility companies offer these services for free or at reduced cost.',
          link: 'https://www.energy.gov/energysaver/home-energy-audits',
          linkText: 'Learn about home energy audits',
        },
        {
          heading: 'Energy-Efficient Appliances',
          text: 'Look for ENERGY STAR certified products when replacing appliances. They use 10-50% less energy than standard models.',
          link: 'https://www.energystar.gov/',
          linkText: 'Find ENERGY STAR products',
        },
        {
          heading: 'Smart Thermostats',
          text: "Install a programmable or smart thermostat to automatically adjust your home's temperature when you're away or sleeping.",
          link: 'https://www.energy.gov/energysaver/thermostats',
          linkText: 'Thermostat buying guide',
        },
      ],
    },
    {
      id: 2,
      title: 'Renewable Energy',
      description: 'Options for switching to clean energy sources',
      content: [
        {
          heading: 'Community Solar Programs',
          text: 'Join a community solar program to get clean energy without installing panels on your roof.',
          link: 'https://www.energy.gov/communitysolar/community-solar',
          linkText: 'Find community solar near you',
        },
        {
          heading: 'Home Solar Installation',
          text: 'Explore the potential for solar panels on your property. Federal and state incentives can significantly reduce costs.',
          link: 'https://www.energy.gov/eere/solar/homeowners-guide-going-solar',
          linkText: "Homeowner's guide to going solar",
        },
        {
          heading: 'Renewable Energy Credits',
          text: 'Purchase Renewable Energy Credits (RECs) to offset your carbon footprint.',
          link: 'https://www.epa.gov/green-power-markets/renewable-energy-certificates-recs',
          linkText: 'Learn about RECs',
        },
      ],
    },
    {
      id: 3,
      title: 'Carbon Reduction',
      description: 'Strategies to lower your carbon footprint',
      content: [
        {
          heading: 'Carbon Offset Programs',
          text: "Support verified carbon offset projects to balance out emissions you can't eliminate.",
          link: 'https://www.offsetguide.org/understanding-carbon-offsets/carbon-offset-programs/',
          linkText: 'Find reputable offset programs',
        },
        {
          heading: 'Transportation Alternatives',
          text: 'Reduce emissions by carpooling, using public transit, biking, or switching to an electric vehicle.',
          link: 'https://www.epa.gov/greenvehicles',
          linkText: 'Green vehicle guide',
        },
        {
          heading: 'Sustainable Diet Choices',
          text: 'Consider reducing meat consumption and choosing locally-grown foods to lower your carbon footprint.',
          link: 'https://www.earthday.org/reduce-your-foodprint/',
          linkText: 'Reduce your foodprint',
        },
      ],
    },
    {
      id: 4,
      title: 'Air Quality Improvement',
      description: 'Ways to enhance indoor and outdoor air quality',
      content: [
        {
          heading: 'Indoor Air Purifiers',
          text: 'Use HEPA air purifiers to reduce indoor pollutants and allergens.',
          link: 'https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home',
          linkText: 'EPA guide to air cleaners',
        },
        {
          heading: 'Home Air Quality Monitor',
          text: 'Install an air quality monitor to track pollution levels inside your home.',
          link: 'https://www.airnow.gov/',
          linkText: 'Check your local air quality',
        },
        {
          heading: 'Indoor Plants',
          text: 'Certain houseplants can help filter indoor air pollutants.',
          link: 'https://ntrs.nasa.gov/citations/19930073077',
          linkText: 'NASA clean air study',
        },
      ],
    },
  ];

  const toggleResource = (id) => {
    if (expandedResources.includes(id)) {
      setExpandedResources(
        expandedResources.filter((expandedId) => expandedId !== id)
      );
    } else {
      setExpandedResources([...expandedResources, id]);
    }
  };

  // Prevent link clicks from toggling the resource card
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="resources-section">
      <h2>Take Action: Resources to Improve Your Impact</h2>
      <p className="resources-intro">
        Based on your home's energy profile, here are resources to help you
        reduce your environmental impact and save money.
      </p>

      <div className="resources-grid">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className={`resource-card ${
              expandedResources.includes(resource.id) ? 'expanded' : ''
            }`}
            onClick={() => toggleResource(resource.id)}
          >
            <div className="resource-header">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <div className="expand-icon">
                {expandedResources.includes(resource.id) ? '−' : '+'}
              </div>
            </div>

            <div
              className={`resource-content ${
                expandedResources.includes(resource.id) ? 'show' : ''
              }`}
            >
              {resource.content.map((item, index) => (
                <div key={index} className="resource-item">
                  <h4>{item.heading}</h4>
                  <p>{item.text}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                    onClick={handleLinkClick}
                  >
                    {item.linkText} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="resources-footer">
        <p>
          Remember that small changes add up! Every action you take helps create
          a more sustainable future.
        </p>
      </div>
    </section>
  );
};

export default ResourcesSection;
