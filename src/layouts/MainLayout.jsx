import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarHeader from '../components/NavbarHeader';


const MainLayout = () => {
  return (
    <>
      <NavbarHeader />
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default MainLayout;
