import { Outlet } from "react-router-dom";
import Navbar from "../../header/Navbar";
import FooterPage from "../../footer/FooterPage";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterPage />
    </div>
  );
};

export default MainPage;
