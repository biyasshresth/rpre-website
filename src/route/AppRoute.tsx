import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/Homepage";
import WebLanding from "../pages/webdesign/WebLanding";
import HeroSection from "../pages/mobileApp/HeroSection";
import MainPage from "../pages/home/components/MainPage";
import { UiheroSection } from "../pages/UiUxdesign/UiheroSection";
import Policy from "../pages/home/components/Policy.tsx";
import TermsCondition from "../pages/home/components/TermsCondition.tsx";
import SelectedPage from "../pages/home/components/SelectedPage.tsx";
const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<SelectedPage />}>
          <Route path="/termsCondition" element={<TermsCondition />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/web-landing" element={<WebLanding />} />
          <Route path="/mobile-app" element={<HeroSection />} />
          <Route path="/ui-ux-design" element={<UiheroSection />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
