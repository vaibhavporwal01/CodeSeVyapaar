import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Global Catalog Registry</h1>
        <p className="text-xl mb-6">Start your journey by logging in as a buyer or seller</p>
        <Link to="/login">
          <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
