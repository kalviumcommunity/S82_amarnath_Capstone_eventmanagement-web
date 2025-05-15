import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom"; // replaces useHistory
import { Home } from "lucide-react"; // or use an image if preferred

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // updated hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (photo) formData.append("photo", photo);

    try {
      await axios.post("http://localhost:5000/auth/signup", formData);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md relative">
        {/* Home Icon */}
        <div className="absolute top-0 right-0 p-2">
          <Link to="/">
              <Home size={32} className="text-black cursor-pointer" />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">SIGN UP</h1>

        <div className="bg-white border-8 border-black rounded-3xl p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">NAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 bg-gray-200 rounded"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">MAIL ID</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 bg-gray-200 rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 bg-gray-200 rounded"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Upload photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="mt-1"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Signup
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="font-semibold">Already have account </span>
            <span
              onClick={() => navigate("/login")}
              className="text-red-500 italic cursor-pointer"
            >
              LOGIN?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
