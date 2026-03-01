import { Route, Routes } from "react-router-dom";
import WebLanding from "../pages/webdesign/WebLanding";
import HomePage from "../pages/home/Homepage";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-landing" element={<WebLanding />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
