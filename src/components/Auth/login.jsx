import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // This will now work as it's inside the Router context

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Example logic: If the email contains "seller", it's a seller, else it's a buyer
    if (email.includes('seller')) {
      navigate('/seller');
    } else {
      navigate('/buyer');
    }
  };

  return (
    <div className="login-page flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
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
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <button 
              onClick={() => navigate('/signup')} 
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
