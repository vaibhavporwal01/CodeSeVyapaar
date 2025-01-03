import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const AuthForm = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function
  const [isRegister, setIsRegister] = useState(true);

  useEffect(() => {
    if (location.pathname === "/auth" || location.search.includes("register")) {
      setIsRegister(true);
    } else if (location.search.includes("login")) {
      setIsRegister(false);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    userType: "buyer",
    verificationMethod: "email",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Check if all required fields are filled
    if (
      !formData.email ||
      !formData.password ||
      (isRegister && (!formData.name || !formData.phone)) || // Name and phone required only for registration
      (isRegister && !formData.userType) ||
      (isRegister && !formData.verificationMethod)
    ) {
      return false; // Form is not valid
    }
    return true; // All fields are filled
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = isRegister ? "Registered" : "Logged in";
    console.log(`${action}:`, formData);

    if (validateForm()) {
      // Redirect to OTP verification page after registration
      navigate("/otp-verification");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          {isRegister ? "Create an Account" : "Welcome Back!"}
        </h2>

        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => setIsRegister(false)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              !isRegister
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegister(true)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              isRegister
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {isRegister && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {isRegister && (
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}

            {isRegister && (
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="buyer"
                    checked={formData.userType === "buyer"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Buyer
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="seller"
                    checked={formData.userType === "seller"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Seller
                </label>
              </div>
            )}

            {isRegister && (
              <div>
                <p className="text-sm font-medium mb-2">Select Verification Method:</p>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="verificationMethod"
                      value="email"
                      checked={formData.verificationMethod === "email"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="verificationMethod"
                      value="phone"
                      checked={formData.verificationMethod === "phone"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Phone
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="verificationMethod"
                      value="sms"
                      checked={formData.verificationMethod === "sms"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    SMS
                  </label>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg font-medium text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isRegister ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500 font-medium hover:underline"
          >
            {isRegister ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
