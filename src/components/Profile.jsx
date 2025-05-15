import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Dummy data – replace with props or context later
  const user = {
    name: "XXXXXXX",
    email: "XXXXX@gmail.com",
    photo: "", // URL or base64
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-gray-300 flex justify-between items-center px-6 py-3">
        <h2 className="text-2xl font-bold">Profile</h2>
        <div className="flex items-center gap-2">
          <span className="font-semibold">HOME</span>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            🏠
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white mt-8 px-6 py-8 rounded-lg shadow-md text-center">
        {/* Profile image */}
        <div className="w-24 h-24 rounded-full border-4 border-black bg-black mx-auto mb-4"></div>

        {/* User Details */}
        <p className="text-lg font-bold mb-2">NAME :- {user.name}</p>
        <p className="text-lg font-bold mb-6">EMAIL :- {user.email}</p>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            className="w-40 bg-[#1c0000] text-white py-2 rounded"
            onClick={() => navigate("/edit-profile")}
          >
            EDIT PROFILE
          </button>
          <button
            className="w-40 bg-[#360000] text-white py-2 rounded"
            onClick={() => alert("Delete logic here")}
          >
            Delete Account
          </button>
          <button
            className="w-40 bg-black text-white py-2 rounded"
            onClick={() => navigate("/eventlist")}
          >
            My Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
