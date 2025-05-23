import React from 'react';
import { ArrowLeft, Home, MapPin, Info, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CreateEvent = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-300 p-4">
        <ArrowLeft className="w-6 h-6 cursor-pointer" />
        <h1 className="text-xl font-bold">Create Event</h1>
        <Link to="/">
          <Home className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>

      {/* Card */}
      <div className="flex justify-center mt-8">
        <div className="border-8 border-black rounded-3xl p-6 w-full max-w-2xl">
          {/* Date and Time */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-bold mb-1">DATE</label>
              <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className="block font-bold mb-1">TIME</label>
              <input
                type="time"
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block font-bold flex items-center gap-1 mb-1">
              <MapPin className="w-4 h-4" /> LOCATION :-
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block font-bold flex items-center gap-1 mb-1">
              <Info className="w-4 h-4" /> Description :-
            </label>
            <textarea
              placeholder="Enter event description"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Placeholder (Avatar or Image) */}
          <div className="mb-6">
            <label className="block font-bold mb-1">Place holder :-</label>
            <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-md">
              <User className="w-16 h-16" />
            </div>
          </div>

      
          <div className="flex justify-end">
            <button onClick={()=>{navigate("/eventdetails")}} className="bg-black text-white px-6 py-2 rounded-md font-bold hover:bg-gray-800">
              CREATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
