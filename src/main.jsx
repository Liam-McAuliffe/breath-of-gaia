import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';

import App from './components/app/App.jsx';
import ErrorPage from './components/error-page/ErrorPage.jsx';
import Home from './components/home/Home.jsx';
import Privacy from './components/legal/privacy/Privacy.jsx';
import Terms from './components/legal/terms/Terms.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Thanks from './components/contact/thanks/Thanks.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'legal/privacy',
        element: <Privacy />,
      },

      {
        path: 'legal/terms',
        element: <Terms />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'contact/thanks',
        element: <Thanks />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
