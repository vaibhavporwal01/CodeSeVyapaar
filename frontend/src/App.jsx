import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/Auth/login';
import OTPVerification from './components/Auth/Otp_Verification';
import SellerRegistration from './components/Auth/SellerRegistration';
import UserDashboard from './components/Dashboard/UserDashboard';
import SellerDashboard from './components/Dashboard/SellerDashboard';
import TemplateSelector from "./components/new_product/TemplateSelector";
import CustomTemplateBuilder from './components/new_product/TemplateBuilder';
import Preview from './components/new_product/PreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OTPVerification />} /> {/* New Route */}
        <Route path="/seller-registration" element={<SellerRegistration />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/add-product" element={<TemplateSelector />} />
        <Route path="/custom-template" element={<CustomTemplateBuilder />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
