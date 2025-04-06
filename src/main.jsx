import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './reset.css';

import App from './components/app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
