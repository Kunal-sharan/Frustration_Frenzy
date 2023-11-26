import React from 'react'
import VideoLeft  from '../Components/VideoLeft'
import natureVideo from '../../public/left_video.mp4'

const VideoPage = () => {
  return (
    <div className='flex flex-row h-screen text-black p-1 relative w-full ' >
        <div className='h-screen w-1/2 relative'>
            <VideoLeft url = {natureVideo} />
        </div>
        <div className='bg-[#557C55] p-14 flex flex-col place-content-evenly w-full'>
            <div className='text-center leading-10 mb-4'>
                <h1 className='text-4xl text-white-green font-bold font-sans mb-4'>CREATE YOUR SANCTUARY</h1>
                <h3 className='text-xl text-sec-red'>Mind Calming Decor & Mindfulness Tools</h3>
            </div>

            <div className='text-white-green text-lg'>
            <p>At frustration frenzy, we believe that inner peace begins with cultivating an environment of calm and mindfulness. That's why we've created Mind Mantra, a dedicated sanctuary where the journey to serenity begins.
            Mind Mantra is more than just a collection of decor and mindfulness tools; it's a gateway to inner peace. </p>
            </div>
            <div className='flex flex-col place-content-evenly w-1/5'>
                <a className='text-white-green' href=''>Read more</a>
                <br />
                <button className="btn btn-primary bg-sec-red text-white-green hover:bg-[#A6CF98]">
                Know More
                </button>
            </div>
        </div>
    </div>
  )
}

export default VideoPage