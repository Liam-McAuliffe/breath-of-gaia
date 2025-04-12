import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending…');
    const formData = new FormData(event.target);

    const apikey = import.meta.env.VITE_WEB3FORMS_API_KEY;
    formData.append('access_key', apikey);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');

      navigate('/contact/thanks');
    } else {
      console.error('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md border-l-4 border-accent">
        <h2
          className="mb-6 text-3xl font-heading text-bg-dark text-center font-bold"
          id="contact"
        >
          Contact Me
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-text-dark font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-secondary"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-text-dark font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-secondary"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-text-dark font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-secondary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-button-primary hover:bg-button-hover transition-colors duration-300 text-white font-medium py-2 px-4 rounded-md"
          >
            Submit Form
          </button>
        </form>
        {result && (
          <div className="mt-4 text-center text-lg text-text-dark animate-fadeSlideUp">
            {result}
          </div>
        )}
      </div>
      <style>
        {`
          .animate-fadeSlideUp {
            animation: fadeSlideUp 0.6s forwards;
          }
          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
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

export default Contact;
