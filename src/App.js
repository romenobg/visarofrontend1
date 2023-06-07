import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import CookiePolicy from "./pages/CookiePolicy";
import Login from "./pages/Login";
import AccountOpened from "./pages/AccountOpened";
import BankDetail from "./pages/BankDetail";
import ResetPWD from "./pages/ResetPWD";
import CreatePassword from "./pages/CreatePassword";
import ResetOtp from "./pages/ResetOtp";
import OtpInput from "./pages/OtpInput";
import ForgotPwd from "./pages/ForgotPwd";
import Country from "./pages/Country";
import AccountType from "./pages/AccountType";
import BusinessPage from "./pages/BusinessPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-for-visaro5":
        title = "";
        metaDescription = "";
        break;
      case "/cookie-policy":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/account-opened":
        title = "";
        metaDescription = "";
        break;
      case "/bank-detail":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-for-visaro3":
        title = "";
        metaDescription = "";
        break;
      case "/create-password":
        title = "";
        metaDescription = "";
        break;
      case "/reset-otp":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-for-visaro":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-for-visaro2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-for-visaro6":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-for-visaro1":
        title = "";
        metaDescription = "";
        break;
      case "/business-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account-opened" element={<AccountOpened />} />
      <Route path="/bank-detail" element={<BankDetail />} />
      <Route path="/reset-pwd" element={<ResetPWD />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/reset-otp" element={<ResetOtp />} />
      <Route path="/sign-up-for-visaro" element={<OtpInput />} />
      <Route path="/forgot-pwd" element={<ForgotPwd />} />
      <Route path="/country" element={<Country />} />
      <Route path="/sign-up-for-visaro1" element={<AccountType />} />
      <Route path="/business-page" element={<BusinessPage />} />
    </Routes>
  );
}
export default App;
