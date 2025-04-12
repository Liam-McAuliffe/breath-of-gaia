import React from 'react';
import { FaCheckCircle, FaEnvelope, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Thanks() {
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
          id="thanks"
        >
          Thank You!
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        <div className="flex justify-center mb-8">
          <FaCheckCircle className="text-accent-secondary text-6xl" />
        </div>
        <p className="text-lg text-text-dark mb-8">
          I've received your message and appreciate you reaching out to
          MyHomeImpact.
        </p>
      </div>

      <div className="card-animate delay-200 relative z-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12 border-l-4 border-accent">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-6 font-semibold">
          What Happens Next?
        </h2>
        <p className="text-text-dark mb-6">
          I will review your message and will get back to you as soon as
          possible, typically within 24-48 hours. In the meantime, feel free to
          explore more of the site to learn about reducing your home's
          environmental impact.
        </p>
      </div>

      <div className="card-animate delay-400 relative z-10 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-8 text-center font-semibold">
          Explore More
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
            <div className="flex items-center mb-4">
              <FaHome className="text-accent mr-3 text-xl" />
              <h3 className="font-heading text-xl text-primary font-semibold">
                Return to Home
              </h3>
            </div>
            <p className="text-text-dark mb-4">
              Continue exploring your home's environmental impact with the
              interactive tools and visualizations.
            </p>
            <Link
              to="/"
              className="inline-block bg-button-primary hover:bg-button-hover text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Home
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent-secondary">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-accent-secondary mr-3 text-xl" />
              <h3 className="font-heading text-xl text-primary font-semibold">
                Contact Us Again
              </h3>
            </div>
            <p className="text-text-dark mb-4">
              Have another question or feedback? I am always happy to hear from
              you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent-secondary hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="card-animate delay-600 relative z-10 max-w-4xl mx-auto text-center mt-12">
        <h2 className="font-heading text-2xl md:text-3xl text-bg-dark mb-6">
          Ready to make a difference?
        </h2>
        <Link
          to="/about"
          className="inline-block bg-button-primary hover:bg-button-hover text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
        >
          Learn More About This Site
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

export default Thanks;
