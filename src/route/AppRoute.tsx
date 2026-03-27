import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/Homepage";
import WebLanding from "../pages/webdesign/WebLanding";
import HeroSection from "../pages/mobileApp/HeroSection";
import MainPage from "../pages/home/components/MainPage";
import { UiheroSection } from "../pages/UiUxdesign/UiheroSection";
import Policy from "../pages/home/components/Policy.tsx";
import TermsCondition from "../pages/home/components/TermsCondition.tsx";
import SelectedPage from "../pages/home/components/SelectedPage.tsx";
import Contact from "../pages/home/components/Contact.tsx";
const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/" element={<HomePage />} />
                    <Route path="/web-landing" element={<WebLanding />} />

          <Route path="/mobile-app" element={<HeroSection />} />
          <Route path="/ui-ux-design" element={<UiheroSection />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<SelectedPage />}>
          <Route path="/termsCondition" element={<TermsCondition />} />
          <Route path="/policy" element={<Policy />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
