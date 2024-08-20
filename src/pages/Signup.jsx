import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import useSignup from "../Hooks/useSignup";
import { BsUnlock, BsLock } from "react-icons/bs";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, signup } = useSignup();

  // Handle gender selection
  const handleCheckboxChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await signup(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-black">
        <h1 className="text-3xl font-semibold text-center text-white">
          Signup to
          <span className="text-blue-500"> Chat Messenger</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white mt-4">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-4">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-4">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsUnlock /> : <BsLock />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-4">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={formData.gender}
          />

          <Link
            to="/login"
            className="block text-sm font-medium text-blue-500 hover:underline mt-4"
          >
            Already have an account?
          </Link>

          <button
            className="btn btn-block btn-sm mt-2 bg-blue-700 font-bold text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
