import React from 'react'

const MainPage = () => {
  return (
    <div className='w-1/2 flex-auto flex-col m-8 p-4 justify-items-center'>
        <div className='h-100 w-100 font-bold text-6xl mb-4 leading-normal'>
            The Best Rageroom Service in India
        </div>
        <div className='font-medium text-justify mb-6 text-xl w-1/2 leading-normal'>
            Save Time and Money with Online Booking and Flat Rate Pricing!
        </div>
        <button className='font-bold px-10 py-3 bg-green-800 shadow-md rounded-md hover:bg-green-400'>
            Book Now
        </button>
    </div>
  )
}

export default MainPage