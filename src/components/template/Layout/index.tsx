import { Outlet } from 'react-router-dom';
import Navbar from '../../molecules/Navbar';
import Footer from '../../molecules/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
