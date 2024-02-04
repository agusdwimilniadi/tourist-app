import { Outlet } from 'react-router-dom';
import Navbar from '../../organism/Navbar';
// import Footer from '../../organism/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
