import React from 'react';
import { Home, ArrowLeft, CheckCircle } from 'lucide-react';
import {Link} from 'react-router-dom'
const EventProgress = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-300 p-4">
        <ArrowLeft className="w-6 h-6 cursor-pointer" />
        <h1 className="text-xl font-semibold">EVENT PROGRESS</h1>
        <Link to='/'>
        <Home className="w-6 h-6 cursor-pointer"  />
        </Link>
      </div>

      {/* Price Cards */}
      <div className="flex flex-col items-center gap-4 p-4">
        {[true, false].map((isChecked, index) => (
          <div key={index} className="bg-black text-white p-6 w-full max-w-md rounded-lg">
            <div className="flex justify-between py-1">
              <span>hall price</span> <span>:- XXXX</span>
            </div>
            <div className="flex justify-between py-1">
              <span>mess price</span> <span>:- XXXX</span>
            </div>
            <div className="flex justify-between py-1">
              <span>externals</span> <span>:- XXXX</span>
            </div>
            <div className="flex justify-between py-1">
              <span>price</span> <span>:- XXXX</span>
            </div>
            <div className="flex items-center pt-4">
              <span className="mr-2">send here</span>
              {isChecked && <CheckCircle className="w-5 h-5 text-green-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventProgress;
