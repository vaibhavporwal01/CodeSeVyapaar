import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/Auth/login';
import SignupPage from './components/Auth/SignupPage';
import Navbar from './components/Navbar'; // Global Navbar
import SellerRegistration from './components/Auth/SellerRegistration';
import UserDashboard from './components/Dashboard/UserDashboard';
import SellerDashboard from './components/Dashboard/SellerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Navbar />} />
        <Route path="/signup" element={<Navbar />} />
        <Route path="/seller-registration" element={<Navbar />} />
        <Route path="/user-dashboard" element={<Navbar />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
