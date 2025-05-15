import React from 'react';
import { ArrowLeft, Home, Image, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const EventDetailsCard = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-300 p-4">
        <ArrowLeft className="w-6 h-6 cursor-pointer" />
        <h1 className="text-xl font-bold">Event details Card</h1>
        <Link to="/">
          <Home className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>

      {/* Card */}
      <div className="flex justify-center mt-8">
        <div className="border-8 border-black rounded-3xl p-6 w-full max-w-lg">
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            <Image className="w-6 h-6" />
            <span className="text-lg font-medium">Title</span>
            <div className="flex-1 bg-gray-300 h-6 rounded-md ml-2" />
          </div>

          {/* Date & Time */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <span>Event Date :-</span>
              <div className="bg-gray-300 h-6 mt-1 rounded-md" />
            </div>
            <div className="flex-1">
              <span>Event Time :-</span>
              <div className="bg-gray-300 h-6 mt-1 rounded-md" />
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <span>Event Address :-</span>
            <div className="bg-gray-300 h-6 mt-1 rounded-md" />
          </div>

          {/* Description */}
          <div className="mb-6">
            <span>Event Description :-</span>
            <div className="bg-gray-300 h-16 mt-1 rounded-md" />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button className="bg-gray-300 px-6 py-2 rounded-md text-black font-semibold">EDIT</button>
            <button onClick={()=>{navigate("/eventprogress")}} className="bg-gray-300 px-6 py-2 rounded-md flex items-center gap-2 text-black font-semibold">
              <Mail className="w-5 h-5" />
              go for it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;
