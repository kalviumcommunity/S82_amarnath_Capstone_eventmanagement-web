import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import EventList from "./components/EventList";
import EventProgress from "./components/EventProgress";
import EventDetailsCard from "./components/EventDetails";
import CreateEvent from "./components/CreateEvent";
import AdminInfo from "./components/AdminInfo";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create-event" element={<CreateEvent/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eventlist" element={<EventList/>} />
          <Route path="/eventprogress" element={<EventProgress/>} />
          <Route path="/eventdetails" element={<EventDetailsCard/>} />
          <Route path="/createevent" element={<CreateEvent/>} />
          <Route path="/admin" element={<AdminInfo/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
