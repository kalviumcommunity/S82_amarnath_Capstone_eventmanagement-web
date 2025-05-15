import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate()
  return (
    <div className="font-sans min-h-screen bg-white text-center">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-300 px-4 py-3">
        <div className="text-2xl font-bold cursor-pointer">☰</div>

        <div className="flex items-center gap-2 italic font-bold">
          <div className="w-6 h-6 rounded-full border-4 border-blue-200 bg-blue-600"></div>
          <Link to="/profile">
          <span>Profile</span>
          </Link>
        </div>

        <div className="space-x-4 font-bold">
         <Link to="/signup" className="hover:underline">Sign up</Link>
         <Link to="/login" className="hover:underline">LOG IN</Link>
        </div>
      </header>

      {/* Main Section */}
      <main className="mt-20 px-4">
        <h1 className="text-3xl font-extrabold mb-10">WELCOME TO YOUR APP</h1>

        <button onClick={()=>navigate("/admin")} className="bg-[#1a0000] text-white font-bold text-xl py-3 px-12 mb-8">
          BOOK HERE
        </button>

        <p className="text-lg mb-6">Manage and discover event easiy</p>

        <div className="flex justify-center gap-3">
          <button onClick={()=>navigate("/eventlist")} className="bg-neutral-800 text-white px-4 py-2">My Events</button>
          <button className="bg-neutral-800 text-white px-4 py-2" onClick={()=>navigate('/eventprogress')}> event progress</button>
        </div>
      </main>
    </div>
  );
}

export default Home;