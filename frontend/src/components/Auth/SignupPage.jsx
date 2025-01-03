import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('buyer'); // Default to 'buyer'
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Example: After submitting the form, navigate based on the user type (seller or buyer)
    console.log('Signup Details:', { fullName, email, password, userType });
    
    // Redirect to the appropriate page based on user type
    if (userType === 'seller') {
      navigate('/seller-registration');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="signup-page flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-semibold">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* User Type Selection */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Register as:</label>
            <div className="flex items-center">
              <label htmlFor="buyer" className="mr-4">Buyer</label>
              <input 
                type="radio" 
                id="buyer" 
                name="userType" 
                value="buyer" 
                checked={userType === 'buyer'} 
                onChange={(e) => setUserType(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-2">
              <label htmlFor="seller" className="mr-4">Seller</label>
              <input 
                type="radio" 
                id="seller" 
                name="userType" 
                value="seller" 
                checked={userType === 'seller'} 
                onChange={(e) => setUserType(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <button 
              onClick={() => navigate('/login')} 
              className="text-blue-500 hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
