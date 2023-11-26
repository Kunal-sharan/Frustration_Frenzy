"use client"
import Link from 'next/link';
import { useState } from 'react';
let aglePageKaData = {};
export default function Home() {
 const [formData, setFormData] = useState({
    name: '',
    expertise: '',
    experience: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    try {
      const response = await fetch('http://localhost:3000/api/submitDoctorForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Doctor information submitted successfully!');
      } else {
        console.error('Doctor information submission failed!');
      }
    } catch (error) {
      console.error('Error submitting doctor information:', error);
    }
  };

  return (
    <div className="bg-dark-green w-2/5 rounded-3xl p-6 mx-auto my-20 flex-col ">
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
            autoComplete='off'
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
            autoComplete='off'
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
            autoComplete='off'
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
            autoComplete='off'
              className="p-1 rounded-lg text-black w-full font-normal"
              name="about"
              value={formData.about}
              onChange={handleChange}
            />
          </label>
        </div>
        <Link href={{pathname:"/Components/doctor_details",query:{ data:formData }}}>
          <div>
            <button
              type="submit"
              className="btn btn-primary  bg-sec-red text-white-green w-60 hover:bg-primary-green"
              onClick={()=>{
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

export {aglePageKaData}