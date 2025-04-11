import { useState } from 'react';

const Resources = () => {
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
          link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9030092/',
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
          heading: 'Help Keep the Air Cleaner',
          text: 'Take everyday steps to reduce air pollution and protect your health.',
          link: 'https://www.airnow.gov/education/what-you-can-do/',
          linkText: 'Learn how to reduce air pollution',
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

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const getBorderColor = (id) => {
    switch (id) {
      case 1:
        return 'border-amber-500';
      case 2:
        return 'border-teal-500';
      case 3:
        return 'border-green-700';
      case 4:
        return 'border-slate-700';
      default:
        return 'border-green-700';
    }
  };

  return (
    <section
      className="py-12 px-6 bg-gradient-to-b from-stone-200/90 to-green-200/40 border-t-3 border-slate-700"
      id="resources"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(218, 215, 205, 0.9), rgba(163, 177, 138, 0.4)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23588157' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <h2 className="text-center font-serif text-4xl mb-6 font-bold text-primary">
        Take Action: Resources to Improve Your Impact
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 font-sans leading-relaxed text-gray-800">
        Here are resources to help you reduce your environmental impact and save
        money.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-start ">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className={`bg-white resource-card rounded-lg shadow-md transition-all duration-300 cursor-pointer border-t-4 ${getBorderColor(
              resource.id
            )} ${
              expandedResources.includes(resource.id)
                ? 'transform scale-102 shadow-lg'
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
            onClick={() => toggleResource(resource.id)}
          >
            <div className="p-6 relative min-h-32">
              <h3 className="text-text-dark font-serif text-xl mb-2 font-bold">
                {resource.title}
              </h3>
              <p className="text-gray-500 font-sans">{resource.description}</p>
              <div
                className={`absolute top-6 right-6 text-2xl text-slate-700 font-bold transition duration-300 ${
                  expandedResources.includes(resource.id) ? 'rotate-180' : ''
                }`}
              >
                {expandedResources.includes(resource.id) ? '−' : '+'}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                expandedResources.includes(resource.id)
                  ? 'max-h-screen opacity-100 p-6 pt-4 border-t border-gray-100'
                  : 'max-h-0 opacity-0 px-6 py-0 border-t-0'
              }`}
            >
              {resource.content.map((item, index) => (
                <div
                  key={`${resource.id}-${item.heading}`}
                  className={`mb-6 pb-6 ${
                    index !== resource.content.length - 1
                      ? 'border-b border-dashed border-gray-100'
                      : ''
                  }`}
                >
                  <h4 className="text-green-700 font-serif font-bold text-lg mt-4 mb-2">
                    {item.heading}
                  </h4>
                  <p className="text-gray-800 font-sans leading-relaxed mb-2">
                    {item.text}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-slate-800 font-semibold no-underline transition-all duration-200 border-b-2 border-transparent hover:text-amber-500 hover:border-amber-500"
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

      <div className="text-center max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-700">
        <p className="font-sans italic text-gray-800">
          Remember that small changes add up! Every action you take helps create
          a more sustainable future.
        </p>
      </div>
    </section>
  );
};

export default Resources;
