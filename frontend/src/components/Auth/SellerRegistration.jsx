import { useState } from 'react';

const SellerRegistration = () => {
  const [shopName, setShopName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null); // For file upload

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle seller registration logic here (e.g., send form data to the server)
    console.log('Seller Registration:', { shopName, phoneNumber, email, address, zipCode, password, file });
  };

  return (
    <div className="seller-registration flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6">Seller Registration</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="shopName" className="block text-sm font-semibold">Shop Name</label>
            <input 
              type="text" 
              id="shopName" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold">Phone Number</label>
            <input 
              type="text" 
              id="phoneNumber" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
            <label htmlFor="address" className="block text-sm font-semibold">Address</label>
            <textarea 
              id="address" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-semibold">Zip Code</label>
            <input 
              type="text" 
              id="zipCode" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
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

          <div className="mb-4">
            <label htmlFor="fileUpload" className="block text-sm font-semibold">Upload File</label>
            <input 
              type="file" 
              id="fileUpload" 
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              onChange={handleFileChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-700"
          >
            Register as Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerRegistration;
