import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Updated from useHistory (React Router v6+)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redirect to home
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-full bg-gray-300 flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold">Login</h1>
        <Link to="/">
          <FaHome className="text-3xl text-black hover:text-gray-600" />
        </Link>
      </div>

      {/* Form Box */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md border-[8px] border-black rounded-2xl p-8 mt-6 w-96"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            EMAIL :-
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border bg-gray-300 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            PASSWORD :-
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border bg-gray-300 outline-none"
          />
        </div>

        {error && (
          <p className="text-red-600 text-center mb-4 text-sm">{error}</p>
        )}

        <div className="mb-4 text-center">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password ?
          </Link>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 hover:bg-gray-800"
          >
            Login
          </button>
        </div>

        <p className="text-center mt-6">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-red-600 font-semibold ml-2 hover:underline"
          >
            Sign up ?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
