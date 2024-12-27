import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl">Global Catalog Registry</div>
        <div>
          <Link to="/" className="text-white mx-4">Home</Link>
          <Link to="/login" className="text-white mx-4">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
