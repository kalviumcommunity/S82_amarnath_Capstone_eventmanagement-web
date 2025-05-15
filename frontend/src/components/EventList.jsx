import React, { useEffect, useState } from "react";
import axios from "axios";


const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-gray-300 flex justify-center items-center py-4">
        <h1 className="text-2xl font-bold">MY Events</h1>
      </div>

      {/* Grid Container */}
      <div className="mt-10 w-[85%] max-w-4xl border-8 border-black rounded-xl bg-white p-6 shadow-lg">
        {events.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
