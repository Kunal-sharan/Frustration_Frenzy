"use client"
import Link from 'next/link'
import React from 'react'

const ContinueAs = () => {
  return (
    <div className='flex flex-col gap-10 items-center bg-dark-green w-1/2 mx-auto my-auto rounded-2xl p-20 mt-40 h-96'>
        <h1 className='font-bold text-3xl font-sans text-white-green'>Continue As...</h1>
        <button className='btn btn-primary bg-primary-green w-60 text-white-green hover:bg-black border-2 border-white hover:border-white'>
            <Link href="/DoctorForm">Doctor</Link>
        </button>
        <button className='btn btn-primary bg-sec-red w-60 text-white-green hover:bg-black border-2 border-white hover:border-white'>
            Client
        </button>
    </div>
  )
}

export default ContinueAs