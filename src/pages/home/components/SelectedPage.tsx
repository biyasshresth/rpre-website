import { Outlet } from "react-router-dom";
import FooterPage from "../../footer/FooterPage";

const MainPage = () => {
  return (
    <div>
      <Outlet />
      <FooterPage />
    </div>
  );
};

export default MainPage;
