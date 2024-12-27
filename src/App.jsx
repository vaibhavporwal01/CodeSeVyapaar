import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/Auth/login';
import SignupPage from './components/Auth/SignupPage';
import SellerPage from './pages/SellerPage';
import Navbar from './components/Navbar';
import SellerRegistration from './components/Auth/SellerRegistration';
import UserDashboard from './components/Dashboard/UserDashboard';

function App() {
  return (
    <Router> {/* Wrapping everything inside the Router */}
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage/>}/>
          <Route path="/seller-registration" element={<SellerRegistration />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/seller" element={<SellerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
