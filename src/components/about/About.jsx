import React from 'react';
import {
  FaLeaf,
  FaChartLine,
  FaMapMarkerAlt,
  FaBolt,
  FaCloudSunRain,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-bg-light min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233a5a40' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="card-animate relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h1
          className="font-heading text-4xl md:text-5xl text-primary mb-6 font-bold"
          id="about"
        >
          About MyHomeImpact
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-lg text-text-dark mb-8">
          MyHomeImpact helps you discover your home's environmental footprint
          through data-driven insights and visual analytics.
        </p>
      </div>

      <div className="card-animate delay-200 relative z-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12 border-l-4 border-accent">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-6 font-semibold">
          Overview
        </h2>
        <p className="text-text-dark mb-6">
          MyHomeImpact is a user-focused application that provides valuable
          environmental insights about your home. By simply entering your
          address and ZIP code, you can access personalized data about your
          electricity consumption, carbon emissions, and local air quality—all
          presented through an intuitive interface with engaging visualizations.
        </p>
        <div className="flex justify-center mb-4">
          <FaLeaf className="text-accent-secondary text-4xl" />
        </div>
      </div>

      <div className="card-animate delay-400 relative z-10 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-8 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-accent mr-3 text-xl" />
              <h3 className="font-heading text-xl text-primary font-semibold">
                Location Input
              </h3>
            </div>
            <p className="text-text-dark">
              Users enter their street address and ZIP code to receive
              personalized environmental data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent-secondary">
            <div className="flex items-center mb-4">
              <FaBolt className="text-accent-secondary mr-3 text-xl" />
              <h3 className="font-heading text-xl text-primary font-semibold">
                Electricity Estimation
              </h3>
            </div>
            <p className="text-text-dark">
              Integrates with the WattBuy API to fetch estimated electricity
              usage, bill range, and average cost.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bg">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-bg mr-3 text-xl" />
              <h3 className="font-heading text-xl text-primary font-semibold">
                Carbon Emissions
              </h3>
            </div>
            <p className="text-text-dark">
              Converts energy data into estimated carbon emissions to help you
              understand your environmental impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-button-primary">
            <div className="flex items-center mb-4">
              <FaCloudSunRain className="text-button-primary mr-3 text-xl" />
              <h3 className="font-heading text-xl text-primary font-semibold">
                Air Quality
              </h3>
            </div>
            <p className="text-text-dark">
              Uses Open-Meteo's air quality API to provide current pollutant
              levels in your area.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary md:col-span-2">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-primary mr-3 text-xl" />
              <h3 className="font-heading text-xl text-primary font-semibold">
                Data Visualization
              </h3>
            </div>
            <p className="text-text-dark">
              Displays energy usage and carbon emission trends using responsive,
              interactive charts for clear understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="card-animate delay-600 relative z-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md my-12 border-l-4 border-button-primary">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-6 font-semibold">
          Technologies Used
        </h2>
        <ul className="list-disc pl-6 text-text-dark space-y-2">
          <li>
            <span className="font-semibold">React</span> for building the user
            interface
          </li>
          <li>
            <span className="font-semibold">Recharts</span> for data
            visualization
          </li>
          <li>
            <span className="font-semibold">TailwindCSS & Custom CSS</span> with
            a global theme using CSS variables
          </li>
          <li>
            <span className="font-semibold">APIs:</span>
            <ul className="list-circle pl-6 mt-2 space-y-1">
              <li>
                {' '}
                <a
                  href="https://wattbuy.readme.io/reference/getting-started-with-your-api"
                  target="_blank"
                  className="underline hover:text-accent font-semibold"
                >
                  WattBuy API{' '}
                </a>{' '}
                for electricity consumption estimations
              </li>
              <li>
                {' '}
                <a
                  href="https://www.geoapify.com/geocoding-api/"
                  target="_blank"
                  className="underline hover:text-accent font-semibold"
                >
                  Geoapify Geocoding API{' '}
                </a>{' '}
                for location data
              </li>
              <li>
                <a
                  href="https://open-meteo.com/en/docs/air-quality-api"
                  target="_blank"
                  className="underline hover:text-accent font-semibold"
                >
                  Open-Meteo Air Quality API{' '}
                </a>{' '}
                for environmental metrics
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="card-animate delay-800 relative z-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12 border-l-4 border-secondary">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-6 font-semibold">
          Future Improvements
        </h2>
        <p className="text-text-dark mb-4">
          I constantly working to improve MyHomeImpact. Here are some features I
          am planning to add:
        </p>
        <ul className="list-disc pl-6 text-text-dark space-y-2">
          <li>
            Improved error handling with better user feedback when API calls
            fail
          </li>
          <li>
            Loading indicators such as spinners or skeleton loaders while data
            is fetching
          </li>
        </ul>
      </div>

      <div className="card-animate delay-1000 relative z-10 max-w-4xl mx-auto text-center mt-12">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-6">
          Ready to discover your home's impact?
        </h2>
        <Link
          to="/"
          className="inline-block bg-button-primary hover:bg-button-hover text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>

      <style>
        {`
          .card-animate {
            opacity: 0;
            transform: translateY(30px);
            animation: cardAppear 0.8s cubic-bezier(0.13, 0.67, 0.36, 0.99) forwards;
          }
          
          .card-animate.delay-200 {
            animation-delay: 0.2s;
          }
          
          .card-animate.delay-400 {
            animation-delay: 0.4s;
          }
          
          .card-animate.delay-600 {
            animation-delay: 0.6s;
          }
          
          .card-animate.delay-800 {
            animation-delay: 0.8s;
          }
          
          .card-animate.delay-1000 {
            animation-delay: 1s;
          }
          
          @keyframes cardAppear {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
