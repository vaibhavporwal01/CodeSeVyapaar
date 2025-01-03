import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/Auth/login';
import OTPVerification from './components/Auth/Otp_Verification';
import Navbar from './components/Navbar'; // Global Navbar
import SellerRegistration from './components/Auth/SellerRegistration';
import UserDashboard from './components/Dashboard/UserDashboard';
import SellerDashboard from './components/Dashboard/SellerDashboard';

function App() {
  return (
    <Router>
      <Navbar /> {/* Global Navbar placed outside Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OTPVerification />} /> {/* New Route */}
        <Route path="/seller-registration" element={<SellerRegistration />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
