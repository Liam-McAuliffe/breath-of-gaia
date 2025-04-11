import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
