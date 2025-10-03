import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

export default function BookingCalendar() {
  const [value, setValue] = useState(new Date()); // selected date (temporary)
  const [bookedDates, setBookedDates] = useState([
    new Date(2025, 2, 7),  // March 7, 2025
    new Date(2025, 2, 14), // March 14, 2025
  ]);

  // check if a date is already booked
  const isBooked = (date) => {
    return bookedDates.some((d) => d.toDateString() === date.toDateString());
  };

  // user just selects a date (not booked yet)
  const handleDateClick = (date) => {
    setValue(date);
  };

  // confirm booking for the selected date
  const handleConfirm = () => {
    if (!isBooked(value)) {
      setBookedDates([...bookedDates, value]);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-amber-200 to-rose-200 min-h-screen">
      <div className="shadow-xl rounded-3xl overflow-hidden bg-white w-[340px] p-4">
        <h1 className="text-center text-xl font-bold text-gray-800 mb-4">
          {value.toLocaleString("default", { month: "long" })} {value.getFullYear()}
        </h1>

        <Calendar
          onClickDay={handleDateClick}
          value={value}
          tileClassName={({ date, view }) => {
            if (view === "month" && isBooked(date)) {
              return "booked-date"; // orange
            }
            if (view === "month" && date.toDateString() === value.toDateString() && !isBooked(date)) {
              return "selected-date"; // green
            }
            return "";
          }}
          tileDisabled={({ date, view }) => view === "month" && isBooked(date)}
          className="custom-calendar"
          prev2Label={null}
          next2Label={null}
        />

        <button
          onClick={handleConfirm}
          disabled={isBooked(value)} // disable button if already booked
          className={`mt-6 w-full py-2 rounded-2xl font-semibold transition
            ${isBooked(value)
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-emerald-600 text-white hover:bg-emerald-700"}`}
        >
          Confirm Booking
        </button>

        <div className="mt-6 w-full">
          <h2 className="text-lg font-bold mb-2 text-gray-800">Booked Dates:</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
            {bookedDates.map((d, idx) => (
              <li key={idx}>{d.toDateString()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
