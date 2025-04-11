import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLeaf } from 'react-icons/fa';

const ErrorPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-bg-light to-bg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-bg-dark"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="20,30"
            fill="none"
            d="M100,500 Q300,100 500,500 T900,500"
          >
            <animate
              attributeName="d"
              dur="40s"
              repeatCount="indefinite"
              values="M100,500 Q300,100 500,500 T900,500;
                     M100,500 Q300,900 500,500 T900,500;
                     M100,500 Q300,100 500,500 T900,500"
            />
          </path>
        </svg>
      </div>

      <div className="z-10 text-center px-4 max-w-2xl">
        <div className="relative flex justify-center items-baseline mb-6">
          <h1
            className={`font-heading text-9xl font-bold text-primary ${
              fadeIn ? 'animate-fadeSlideUp' : 'opacity-0'
            }`}
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            404
          </h1>
        </div>

        <div
          className={`mb-10 ${fadeIn ? 'animate-fadeSlideUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-bg-dark mb-4">
            Oops! You've wandered off the trail
          </h2>
          <p className="font-body text-lg text-text-dark mb-8">
            The page you're looking for seems to have been reclaimed by nature.
            Let's get you back to a greener path.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 ${
            fadeIn ? 'animate-fadeSlideUp' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-button-primary text-text-light px-8 py-3 rounded-md hover:bg-button-hover transition-colors duration-300 shadow-md"
          >
            <FaHome size={18} />
            <span>Return Home</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-button-primary px-8 py-3 rounded-md hover:bg-accent/10 transition-colors duration-300"
          >
            <FaLeaf size={18} />
            <span>Report Issue</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          className="w-full"
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3a5a40"
            fillOpacity="0.3"
            d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />

          <path
            fill="#325a42"
            fillOpacity="0.5"
            d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,160C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes sway {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
          .animate-fadeSlideUp {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeSlideUp 0.6s forwards;
          }
          @keyframes fadeSlideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
