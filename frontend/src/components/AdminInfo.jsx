import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AdminInfo = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-300 p-4">
        <ArrowLeft className="w-6 h-6 cursor-pointer" />
        <h1 className="text-xl font-bold">Admin Info</h1>
        <Link to="/">
          <Home className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>

      {/* Card */}
      <div className="flex justify-center mt-8">
        <div className="border-8 border-black rounded-3xl p-6 w-full max-w-md">
          <form className="space-y-4">
            {/* Admin Name */}
            <div>
              <label className="block font-semibold mb-1">Admin name :-</label>
              <input
                type="text"
                placeholder="Enter admin name"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold mb-1">Address :-</label>
              <input
                type="text"
                placeholder="Enter address"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* Event Name */}
            <div>
              <label className="block font-semibold mb-1">Event name :-</label>
              <input
                type="text"
                placeholder="Enter event name"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button onClick={()=>{navigate("/createevent")}}
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800"
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
