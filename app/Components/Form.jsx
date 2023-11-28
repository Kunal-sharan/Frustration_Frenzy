"use client";
import Link from "next/link";
import { useState } from "react";
import DateInput from "./doctor_details/date/dates";
import TimeInput from "./doctor_details/time/time";
import ReactDatePicker from "react-datepicker";
import React from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

let aglePageKaData={}
let docSchedule = {};
export default function Home() {
  const [value, onChange] = useState("10:00");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("8:00 AM");
  const [components, setComponents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    experience: "",
    about: "",
    schedules: [], // Maintain an array for schedules
  });

  const handleClick = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      <ScheduleComponent key={prevComponents.length} />,
    ]);
  };

  function ScheduleComponent() {
    return (
      <div>
        <DateInput />
        <TimeInput />
      </div>
    );
  }

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  function DateInput() {
    return (
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        isClearable
        placeholderText="Select a date"
        className="text-black p-2 rounded-lg "
      />
    );
  }
  function TimeInput() {
    return (
      <div>
        <TimePicker disableClock onChange={onChange} value={value} />
      </div>
    );
  }
  const handleAddSchedule = () => {
    if (selectedDate && selectedTime) {
      const newSchedule = {
        date: selectedDate,
        time: selectedTime,
      };

      setFormData((prevData) => ({
        ...prevData,
        schedules: [...prevData.schedules, newSchedule],
      }));

      // Clear selected date and time after adding a schedule
      setSelectedDate(null);
      setSelectedTime("8:00 AM");
    }
    return (
      <div>
        <div className="w-full flex flex-row">
          <div className="mx-1">
            <DateInput />
          </div>
          <div className="mx-1">
            <TimeInput />
          </div>
          <div className="m-auto">
            <div>
              <button onClick={handleClick} className="text-black">Add</button>
              {components}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);

    // ... Rest of your submit logic
  };

  return (
    <div className="bg-dark-green w-2/5 rounded-3xl p-6 mx-auto my-20 flex-col h-fit">
      <h1 className="text-white-green text-center text-4xl font-bold font-sans mb-4 p-2">
        Doctor's Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <div className=" w-full">
          <label className="text-primary-green font-medium text-xl font-sans">
            Name
            <br />
            <input
              autoComplete="off"
              className="p-1 rounded-lg text-black w-full font-normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className=" w-full">
          <label className="text-primary-green font-medium text-xl font-sans ">
            Expertise
            <br />
            <input
              autoComplete="off"
              className="p-1 rounded-lg text-black w-full font-normal"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className=" w-full">
          <label className="text-primary-green font-medium text-xl font-sans">
            Experience
            <br />
            <input
              autoComplete="off"
              className="p-1 rounded-lg text-black w-full font-normal"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className=" w-full">
          <label className="text-primary-green font-medium text-xl font-sans">
            About
            <br />
            <textarea
              autoComplete="off"
              className="p-1 rounded-lg text-black w-full font-normal"
              name="about"
              value={formData.about}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="text-primary-green font-medium text-xl font-sans w-full">
          Add Schedule
        </div>
        <div className="w-full flex flex-row">
          <div className="mx-1">
            <DateInput />
          </div>
          <div className="mx-1">
            <TimeInput />
          </div>
          <div className="m-auto">
            <div>
              <button onClick={handleClick} className="text-black">Add</button>
            </div>
          </div>
          <div className="">
            {components}
          </div>
        </div>
        <Link
          href={{
            pathname: "/Components/doctor_details",
            query: { data: formData },
          }}
        >
          <div>
            <button
              type="submit"
              className="btn btn-primary  bg-sec-red text-white-green w-60 hover:bg-primary-green"
              onClick={() => {
                aglePageKaData = formData;
                console.log(formData);
              }}
            >
              Submit
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}

export { aglePageKaData };

