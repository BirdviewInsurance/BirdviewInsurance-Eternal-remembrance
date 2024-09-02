import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import Header from '../components/Header';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div>
        <style>
        {`
          .shadow-div {
            background-color: white;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            padding: 16px;
          }
        `}
      </style>
      <Header />
      <div className="flex items-center shadow-div justify-center  ">
      <div className="bg-white p-8 rounded-lg shadow-div w-full max-w-md">

        <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Do you have an account? 
          <Link to="/login" className="text-blue-600 hover:underline"> Log in</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
