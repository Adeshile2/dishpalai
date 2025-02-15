import SignInPage from "@/pages/authentication-pages/SigninPage";
import SignUpPage from "@/pages/authentication-pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import DiscountPage from "@/pages/dashboard-pages/discountPage";
import DashboardLayout from "@/pages/dashboard-pages/dashboardLayout";
import PricePage from "@/pages/dashboard-pages/pricePage";
import CategoryPage from "@/pages/dashboard-pages/categoryPage";
import ReservationPage from "@/pages/dashboard-pages/reservationPage";
import TogetherPage from "@/pages/dashboard-pages/togetherPage";
import PlanPage from "@/pages/dashboard-pages/planPage";
import HistoryPage from "@/pages/dashboard-pages/historyPage";
import SettingsPage from "@/pages/dashboard-pages/settingsPage";
import DashboardPage from "@/pages/dashboard-pages/dashboard";
import ScrollToTop from "@/hooks/ScrollToTop";
import LandingPage from "@/pages/LandingPage";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/auth/login" element={<SignInPage />} />
      <Route path="/auth/register" element={<SignUpPage />} />
      
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="discount" element={<DiscountPage />} />
        <Route path="price" element={<PricePage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="reservation" element={<ReservationPage />} />
        <Route path="together" element={<TogetherPage />} />
        <Route path="plans" element={<PlanPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
    </>
  );
};

export default AppRoutes;
