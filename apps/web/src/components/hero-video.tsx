"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroVideo = () => {
    return (
        <div className="flex flex-col justify-center items-center h-80 bg-secondary rounded-full mt-4 relative overflow-hidden">

            <div className="absolute flex flex-col text-center z-10" >
                <span className="text-3xl font-bold text-white">Get a personalized shout from</span>
                <TypeAnimation
                sequence={['Don Jazzy', 3000, 'Tacha', 3000, 'Bob Risky', 4000, 'FalzTheBadGuy', 3000, 'Simi', 4000]}
                deletionSpeed={2}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
                className="text-accent font-black"
            />
            </div>
            <video width="100%" autoPlay loop playsInline poster="./images/video_screenshot.png" className='overflow-hidden object-cover'>
                <source src="./video.mp4" type="video/mp4"/>
                <source src="https://res.cloudinary.com/timi-codes/video/upload/q_71/v1596388887/shutler/few_cgrugm.mp4" type="video/mp4"/>
            </video>
            <div className='absolute bg-black top-0 right-0 w-full h-full opacity-75'/>
        </div>
    )
}

export default HeroVideo;