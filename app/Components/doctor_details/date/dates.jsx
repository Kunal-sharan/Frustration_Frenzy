
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      isClearable
      placeholderText="Select a date"
      className="text-black p-2 rounded-lg "
    />
  );
}
