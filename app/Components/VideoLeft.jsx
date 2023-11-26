"use client"
import React from 'react'
import ReactPlayer from 'react-player'

const VideoLeft = (props) => {

    return (
        <div className='absolute w-full h-full'>
            <ReactPlayer 
            url = {props.url}
            loop="true"
            playing="true"
            controls={false}
            muted= "true" 
            wrapper="true"
            /> 
        </div>
    )
}

export default VideoLeft